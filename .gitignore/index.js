const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("§");

bot.on('ready', function() {
  bot.user.setGame("§help | Dev By NeYziX");
  console.log("le bot a démarré"); 
  bot.channels.get('434344990508843011').send("Je viens de ma réveillé");
});

bot.login("NDM0MDMxODM2OTgxODg2OTg2.DbEfKg.MaBcnykEwD29xzVrNq7jQ6xX4oM")

bot.on('message', message => {
    if(message.content[0] === prefix) {
        let spliteMessage = message.content.split(' ');
        if(spliteMessage[0] === "§hello") {
            message.channel.send("world!");
            message.author.createDM().then(channel => {
                channel.send('WORLD!');
            }).catch(console.error);
        bot.channels.get('434344990508843011').send("Commande §hello utilisée par : " + message.author.username);
        }
      
        else if(spliteMessage[0] === "§help") {
            message.channel.send("Liste des commandes envoyées en privée.");
            message.author.createDM().then(channel => {
                channel.send('**⇩ Liste des commandes ⇩: \n \n §help, pour afficher la liste les commandes \n \n §info, pour afficher les informations du Discord \n \n §socialmedia | §sm, pour afficher les réseaux sociaux de PastelWorld \n \n §créateur, pour afficher le site du créateur \n \n _© NeYziX | Tous droits réservés_**');
            }).catch(console.error);
        bot.channels.get('434344990508843011').send("Commande §help utilisée par : " + message.author.username);
        }
    }
});

bot.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord :")
        .addField("Nom du Discord :", message.guild.name)        
        .addField("Crée le :", message.guild.createdAt)
        .addField("Crée par :", message.server.owner_id)
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "créateur") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour visiter le site du créateur :")
        .addField("Lien :", "http://xrainbow.000webhostapp.com")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "sm") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de PastelWorld :")
        .addField("Instagram :", "https://www.instagram.com/pastelworld_officiel/") 
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "socialmedia") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de PastelWorld :")
        .addField("Instagram :", "https://www.instagram.com/pastelworld_officiel/")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "☺")
        bot.channels.get('434032374188212236').send("EZ");
  
    bot.channels.get('434344990508843011').send("Réaction utilisée : " + reaction.emoji.name);
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member}, allez dans le #conditions-ďutilisation puis mettez une réaction :bust_in_silhouette:  **(après avoir lu les règles)** ;)`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} a quitté PastelWorld. Nous te souhaitons une bonne continuation.`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Nouveauxf');
    member.addRole(role)
})
