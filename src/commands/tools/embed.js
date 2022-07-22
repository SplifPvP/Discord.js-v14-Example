const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Return an embed."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`This is an EMBED`)
      .setDescription("This is a very cool description!")
      .setColor(client.config.embedColor)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://crove.club/`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.config.embedfooterText, //client.user.tag
      })
      .setURL(`https://crove.club/sources`)
      .addFields([
        {
          name: "Regular field title",
          value: "Some value here",
        },
        {
          name: "\u200B",
          value: "\u200B",
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
