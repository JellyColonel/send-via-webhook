import("node-fetch").then(({ default: fetch }) => {
  const config = require("./config.js");

  class DepartmentWebhook {
    constructor(webhookUrl) {
      this.webhookUrl = webhookUrl;
      this.embeds = [];
    }

    formatUsers(users) {
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

    createDepartmentEmbeds() {
      // Automatically create embeds from all roles in config
      Object.values(config.departmentRoles).forEach(role => {
        this.addEmbed({
          title: role.title,
          description: this.formatUsers(role.users),
          color: role.color
        });
      });

      return this;
    }

    addEmbed(embedData) {
      this.embeds.push(embedData);
      return this;
    }

    setFooter(footerText, footerIconUrl = null) {
      if (this.embeds.length > 0) {
        const lastEmbed = this.embeds[this.embeds.length - 1];
        lastEmbed.footer = {
          text: footerText,
          icon_url: footerIconUrl,
        };
        lastEmbed.timestamp = new Date().toISOString();
      }
      return this;
    }

    clearEmbeds() {
      this.embeds = [];
      return this;
    }

    async send(content = "") {
      try {
        const response = await fetch(this.webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: content,
            embeds: this.embeds,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log("Department structure sent successfully!");
        this.clearEmbeds();
      } catch (error) {
        console.error("Error sending message:", error);
        throw error;
      }
    }
  }

  // Example usage
  async function main() {
    const webhook = new DepartmentWebhook(config.WEBHOOK_URL);

    webhook
      .createDepartmentEmbeds()
      .setFooter("for EMS by Brian(ds:jellycolonel)")
      .send("# Состав Fire Department");
  }

  // Run the script
  if (require.main === module) {
    main().catch(console.error);
  }
});