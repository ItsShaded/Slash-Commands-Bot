const { Client, Intents, Collection } = require('discord.js')
const fs = require('fs')

const client = new Client({
    intents: [      //make sure you enable all intents for your bot from dev portal or else these won't work
        'GUILDS',
        'GUILD_MEMBERS',
        'DIRECT_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'GUILD_INTEGRATIONS',
        'GUILD_MESSAGES'
    ]
})

client.commands = new Collection()

require('dotenv').config()

const commandFiles = fs.readdirSync('.src/commands').filter(file => file.endsWith('.js'))
const commands = []
client.commands = new Collection()
for (const file of commandFiles) {
    const command = require(`.src/commands/${file}`)
    commands.push(command.data.toJSON())
    client.commands.set(command.data.name, command)
}
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
for (const file of eventFiles) {
    const event = require(`./events/${file}`)
    if (event.once){
        client.once(event.name, (...args) => event.execute(...args, commands))
    } else {
        client.on(event.name, (...args) => event.execute(...args, commands))
    }
}
