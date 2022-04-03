const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Stop... Get some help'),
    async execute(interaction) {
          interaction.reply({ content: `Type \`/\` and click on my profile to browse my available commands.`, ephemeral: true });
    }
}
