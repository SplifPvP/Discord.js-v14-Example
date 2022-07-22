module.exports = {
  name: "ready",
  once: true,
  /**
   * @param {Client} client
   */
  async execute(client) {
    console.log(`Ready!! ${client.user.tag} is logged in and online.`); // Send a message on the console

    client.user.setPresence({
      activities: [{ name: "with discord.js" }], // 
      status: "idle", // A user's status. Must be one of: online, idle, invisible, dnd (do not disturb)
    });
  },
};
