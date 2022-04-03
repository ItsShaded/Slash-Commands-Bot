const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('sus')
    .setDescription('How sus are you?'),
        async execute(interaction) {
        const rate = Math.floor(Math.random() * 100) + 1
        const embed = new Discord.MessageEmbed()
        .setColor('#23272A')
        .setTitle('Ratemachine Sus')
        .setDescription(`${interaction.member} is ${rate.toString()} % sus`)
        interaction.reply({ embeds: [embed] })
    }
}
