// configs/point-system.js
module.exports = {
  name: "Point System",
  webhookUrl:
    "https://discord.com/api/webhooks/1311249041706975232/OR9FZ_F562ZPSYVzUpeUOI6FkNRKgjl2RabXAoN_QzTUNPzFge4FuFAn8Eoy9O_D_PAW",
  webhookConfig: {
    name: "Секретать EMS",
    avatarUrl: "https://i.imgur.com/3tHBIle.jpeg",
  },
  messageTitle: "",
  footer: "for EMS by Brian (ds: jellycolonel)",
  categories: {
    highPoints: {
      title: "Система баллов для Старшего состава",
      color: "9b59b6",
      fields: [
        {
          name: "<:1045037119904694332:1280857061332095051>Заполнение кадрового аудита:",
          value: "<:1057686403556835339:1280857058937405510>5 Баллов",
          inline: false,
        },
        {
          name: "",
          value: "",
          inline: false,
        },
        {
          name: "<:1045037119904694332:1280857061332095051>Проверка одного отчёта на повышение/еженедельного отчёта:",
          value: "<:1057686403556835339:1280857058937405510>10 Баллов",
          inline: false,
        },
        {
          name: "",
          value: "",
          inline: false,
        },
        {
          name: "<:1045037119904694332:1280857061332095051>Выдача дефибриллятора:",
          value: "<:1057686403556835339:1280857058937405510>5 Баллов",
          inline: false,
        },
        {
          name: "",
          value: "",
          inline: false,
        },
        {
          name: "",
          value:
            "<:Licyxa:1282332767409012807>\n*Представитель старшего состава может выполнять любую работу, представленную в балловой системе, и получать за неё соответствующие баллы. При этом процентная работа отдела остаётся в силе.*\n<:Licyxa:1282332767409012807>",
          inline: false,
        },
      ],
      image: {
        url: "https://i.imgur.com/CKJxJ86.png",
      },
    },
    qualiPoints: {
      title: "Система баллов для квалификаций",
      color: "1abc9c",
      fields: [
        {
          name: "<:1045037119904694332:1280857061332095051>Duty Doctor",
          value:
            "<:1057686403556835339:1280857058937405510>В больнице PillBox *[За 1 справку]* - 2 Балла\n<:1057686403556835339:1280857058937405510>В больницах Sandy Shores и Paleto Bay *[За 1 справку]* - 4 Балла",
          inline: false,
        },
        {
          name: "",
          value: "",
          inline: false,
        },
        {
          name: "<:1045037119904694332:1280857061332095051>Хирург",
          value:
            "<:1057686403556835339:1280857058937405510>За операцию от 20 до 100 баллов\n*[На усмотрение Старшего Хирурга]*",
          inline: false,
        },
        {
          name: "",
          value: "",
          inline: false,
        },
        {
          name: "<:1045037119904694332:1280857061332095051>Психолог",
          value:
            "<:1057686403556835339:1280857058937405510>За сеанс от 10 до 40 баллов\n*[На усмотрение Старшего Психолога]*",
          inline: false,
        },
        {
          name: "",
          value: "",
          inline: false,
        },
        {
          name: "<:1045037119904694332:1280857061332095051>Ветеринар",
          value:
            "<:1057686403556835339:1280857058937405510>За услугу от 10 до 100 баллов\n*[На усмотрение Старшего Ветеринара]*",
          inline: false,
        },
      ],
      image: {
        url: "https://i.imgur.com/6qCgf19.jpeg"
      }
    },
  },
};
