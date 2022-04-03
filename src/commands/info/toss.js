const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('toss')
        .setDescription('Tosses a Coin'),
    async execute(interaction) {
        let flip = [
            'Tails',
            'Heads',
        ]
        let index = (Math.floor(Math.random() * Math.floor(flip.length)))
        const embed = new Discord.MessageEmbed()
        .setColor('#23272A')
        .setTitle(flip[index])
        .setFooter({
        text: (`Tossed for ${interaction.user.username}`)})
        interaction.reply({ embeds: [embed] })
    }
}
