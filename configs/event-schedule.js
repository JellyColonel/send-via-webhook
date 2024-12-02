// configs/event-schedule.js
module.exports = {
  name: "Event Schedule",
  webhookUrl: "https://discord.com/api/webhooks/events-webhook-url",
  webhookConfig: {
    name: "Event Announcer",
    avatarUrl: "https://i.imgur.com/example3.png",
  },
  messageTitle: "# Weekly Events",
  footer: "Schedule for",
  events: [
    {
      title: "Training Sessions",
      color: 0x3498db,
      schedule: [
        { day: "Monday", time: "18:00", description: "Basic Training" },
      ],
    },
  ],
};
