// config.js
// Utility function to convert HEX to decimal
const hexToDecimal = (hex) => parseInt(hex.replace("#", ""), 16);

// Load environment variables
require("dotenv").config();

module.exports = {
  WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,

  // Department structure templates
  departmentRoles: {
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
    depHeads: {
      title: "Заместители Начальника FD",
      color: hexToDecimal("#9b59b6"),
      users: [
        "397709109954215936 | Konstantin Barabas | 62837",
        "658666284564873276 | Ksu Hennessy | 9047",
        "800873511513227276 | Skif Hennessy | 45379",
      ],
    },
    staff: {
      title: "Сотрудники FD",
      color: hexToDecimal("#e9600c"),
      users: [
        "353451742555406346 | Alfa Eclipse | 48413",
        "397477004808683520 | Georgiy Morozov | 87583",
        "400688419858153482 | Mice Hennessy | 18952",
        "731571385826279465 | Stephan Pasternak | 58492",
      ],
    },
    protected: {
      title: "Неприкасамые",
      color: hexToDecimal("#e74c3c"),
      users: [
        "363731384604426251 | Dante Dybrovsky | 54656",
        "914122137076387850 | Johnny Smoker | 8878",
      ],
    },
  },
};
