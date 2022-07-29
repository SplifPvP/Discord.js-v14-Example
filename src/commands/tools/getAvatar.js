const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("getAvatar")
    .setType(ApplicationCommandType.User),
  async execute(interaction, client) {
    interaction.reply({
      content: `${interaction.targetUser.displayAvatarURL()}`,
    });
  },
};
