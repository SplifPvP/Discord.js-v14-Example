module.exports = {
    data: {
        name: `sub-web`
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `https://crove.club/`
        });
    }
}