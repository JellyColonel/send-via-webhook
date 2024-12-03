import("node-fetch").then(({ default: fetch }) => {
  const path = require("path");
  const fs = require("fs");

  const hexToDecimal = (hex) => {
    const cleanHex = hex.replace("#", "").toLowerCase();
    return parseInt(cleanHex, 16);
  };

  class WebhookManager {
    constructor(config) {
      this.config = config;
      this.embeds = [];
    }

    processColor(color) {
      if (typeof color === "string" && color.match(/^#?[0-9a-f]{6}$/i)) {
        return hexToDecimal(color);
      }
      return color;
    }

    formatContent(content) {
      if (typeof content === "string") return content;
      if (Array.isArray(content)) {
        return content.map((item, index) => `${index + 1}. ${item}`).join("\n");
      }
      return JSON.stringify(content);
    }

    createEmbedsFromConfig() {
      // Handle different config structures
      if (this.config.roles) {
        this.createStaffEmbeds();
      } else if (this.config.categories) {
        this.createPointSystemEmbeds();
      } else if (this.config.events) {
        this.createEventEmbeds();
      }
      return this;
    }

    createStaffEmbeds() {
      Object.values(this.config.roles).forEach((role) => {
        this.addEmbed({
          title: role.title,
          description: this.formatUsers(role.users),
          color: role.color,
        });
      });
    }

    createPointSystemEmbeds() {
      Object.values(this.config.categories).forEach((category) => {
        this.addEmbed({
          title: category.title,
          color: this.processColor(category.color),
          fields: category.fields,
          image: category.image,
        });
      });
    }

    createEventEmbeds() {
      Object.values(this.config.events).forEach((eventType) => {
        const description = eventType.schedule
          .map(
            (event) => `**${event.day}** ${event.time} - ${event.description}`
          )
          .join("\n");

        this.addEmbed({
          title: eventType.title,
          description: description,
          color: eventType.color,
        });
      });
    }

    formatUsers(users) {
      if (!Array.isArray(users)) return users;

      if (users.length === 1) {
        const [discordId, ...rest] = users[0].split(" | ");
        return `<@${discordId}> | ${rest.join(" | ")}`;
      }

      return users
        .map((user, index) => {
          const [discordId, ...rest] = user.split(" | ");
          return `${index + 1}. <@${discordId}> | ${rest.join(" | ")}`;
        })
        .join("\n");
    }

    addEmbed(embedData) {
      this.embeds.push(embedData);
      return this;
    }

    setFooter(footerText = this.config.footer, footerIconUrl = null) {
      if (this.embeds.length > 0) {
        const lastEmbed = this.embeds[this.embeds.length - 1];
        lastEmbed.footer = {
          text: footerText,
          // Use config footerImage if provided, otherwise use passed iconUrl
          icon_url: this.config.footerImage || footerIconUrl,
        };
        lastEmbed.timestamp = new Date().toISOString();
      }
      return this;
    }

    clearEmbeds() {
      this.embeds = [];
      return this;
    }

    async send(content = this.config.messageTitle) {
      try {
        const requestBody = {
          content: content,
          embeds: this.embeds,
        };

        // Add webhook name and avatar if provided
        if (this.config.webhookConfig) {
          if (this.config.webhookConfig.name) {
            requestBody.username = this.config.webhookConfig.name;
          }
          if (this.config.webhookConfig.avatarUrl) {
            requestBody.avatar_url = this.config.webhookConfig.avatarUrl;
          }
        }

        const response = await fetch(this.config.webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log(
          `${this.config.name} sent successfully as ${
            this.config.webhookConfig?.name || "webhook"
          }!`
        );
        this.clearEmbeds();
      } catch (error) {
        console.error("Error sending message:", error);
        throw error;
      }
    }
  }

  function loadConfig(configName) {
    const configPath = path.join(__dirname, "configs", `${configName}.js`);
    if (!fs.existsSync(configPath)) {
      throw new Error(`Configuration file ${configName}.js not found`);
    }
    return require(configPath);
  }

  async function sendWebhookMessage(configName) {
    try {
      const config = loadConfig(configName);
      const webhook = new WebhookManager(config);

      await webhook.createEmbedsFromConfig().setFooter().send();
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  }

  // Command-line usage
  if (require.main === module) {
    const configName = process.argv[2];
    if (!configName) {
      console.error(
        "Please provide a config name. Example: node webhook.js staff-structure"
      );
      process.exit(1);
    }
    sendWebhookMessage(configName).catch(console.error);
  }

  module.exports = { sendWebhookMessage, WebhookManager };
});
