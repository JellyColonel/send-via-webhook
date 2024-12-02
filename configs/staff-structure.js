// configs/staff-structure.js
const hexToDecimal = (hex) => parseInt(hex.replace("#", ""), 16);

module.exports = {
  name: "FD Staff Structure",
  webhookUrl: "https://discord.com/api/webhooks/fd-webhook-url",
  webhookConfig: {
    name: "FD Staff Bot",
    avatarUrl: "https://i.imgur.com/example1.png",
  },
  messageTitle: "# Состав Fire Department",
  footer: "Актуально на",
  roles: {
    curator: {
      title: "Заведующий FD",
      color: hexToDecimal("#1abc9c"),
      users: ["178560714821206016 | Brian Hennessy | 26138"],
    },
    head: {
      title: "Начальник FD",
      color: hexToDecimal("#9b59b6"),
      users: ["401324200247164929 | Alexander Mahone | 41048"],
    },
  },
};
