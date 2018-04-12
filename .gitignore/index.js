const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("§");

bot.on('ready', function() {
  bot.user.setGame("&help | By NeYziX");
  console.log("le bot a démarré"); 
});

bot.login("NDM0MDMxODM2OTgxODg2OTg2.DbEfKg.MaBcnykEwD29xzVrNq7jQ6xX4oM")

bot.on('message', message => {

    if (message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord :")
        .addField("Nom du Discord :", message.guild.name)
        .addField("Crée le :", message.guild.createdAt)
        .addField("Tu as rejoin le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    message.delete();
    }
});

bot.on('message', message => {

    if (message.content === prefix + "créateur") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour visiter le site du créateur :")
        .addField("Lien :", "xrainbow.000webhostapp.com")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    message.delete();
    }
});

bot.on('message', message => {

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setDescription("⇩Liste des commandes⇩:")
        .addField("§help", "Pour afficher la liste les commandes")
        .addField("§infodiscord", "Pour afficher les informations du Discord")
        .addField("§shop", "Pour afficher le shop de NeYziX")
        .addField("§créateur", "Pour afficher le site du créateur")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    message.delete();
    }
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "arrivé-départ").send(`Bienvenue à ${member} sur le serveur ;)`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "arrivé-départ").send(`Aurevoir ${member}.`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Membres 🌟');
    member.addRole(role)
})
