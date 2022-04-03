const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check the Bot API and Latency'),
    async execute(interaction) {
        const embed = new Discord.MessageEmbed()
            .setColor('#23272A')
            .setTimestamp()
            .setTitle(`Pong <:valid:844301736264204339>`)
            .addField('Latancy:', `${(interaction.client.ws.ping).toFixed(0)} ms`, true)
            .addField('API Latancy:', `${Date.now() - interaction.createdTimestamp}ms`)
        interaction.reply({ embeds: [embed] , ephemeral: true })
    }
}
