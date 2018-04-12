const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&");

bot.on('ready', function() {
  bot.user.setGame("&help | By NeYziX");
  console.log("le bot a démarré"); 
});

bot.login("NDM0MDMxODM2OTgxODg2OTg2.DbEfKg.MaBcnykEwD29xzVrNq7jQ6xX4oM")
