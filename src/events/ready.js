const {REST} = require("@discordjs/rest")
const {Routes} = require("discord-api-types/v9")
require("dotenv").config()
module.exports = {
    name: "ready",
    once: true,
    execute(client, commands) {

      // New Version
      const CLIENT_ID = client.user.id;
      const rest = new REST({
        version: '9',
      }).setToken(process.env.TOKEN);

      (async ()  => {
          try{
              await rest.put(Routes.applicationCommands(CLIENT_ID), {
                  body : commands
              });
              console.log(`Succesfully registered commands globally! ${client.guilds.cache.map(person => person.memberCount).reduce(function (s, v) { return s + (v || 0) }, 0)} users.`)
          } catch (err) {
            if (err)  console.error(err)
          }
      })()
      }
  }
