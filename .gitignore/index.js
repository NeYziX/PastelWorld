const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("§");

bot.on('ready', function() {
  bot.user.setGame("§help | Dev By NeYziX");
  console.log("le bot a démarré"); 
  bot.channels.get('434344990508843011').send("**=======================**");
  bot.channels.get('434344990508843011').send("| LE BOT VIENT DE SE LANCER |");
  bot.channels.get('434344990508843011').send("**=======================**");
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
  if (message.content.startsWith(prefix + "avatar")) {

message.channel.send({embed: {

    title: "Votre avatar",

    image: {

        url: message.author.avatarURL

    },

    color: 15722240

}

    })

}
});

bot.on('message', message => {

    if (message.content === prefix + "b") {
        var embed = new Discord.RichEmbed()
        .addField("Bienvenue ! Je t'invite à prendre connaissance du #informations-🚩  .", "Nous espérons que tu passeras un bon moment ici !")        
        .setColor("0x00FF00")
        .setTimestamp()
    message.channel.sendEmbed(embed)
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
  
    if (!message.content.startsWith(prefix)) return;
  
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "8ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Merci de poser une question :8ball:")};
        
            var replys = [
                "Oui",
                "Non",
                "Je sais pas",
                "Peut-être"
            ];
        
            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball")
            .addField("Question :thinking:", tte)
            .addField("Réponse :kissing_heart:", reponse)
            message.channel.sendEmbed(bembed)
            break;
            case "clear":
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                }, function(err){message.channel.send("Erreur")})}
            break;
            case "chat":
            let xoargs = message.content.split(" ").slice(1);
            let xo03 = xoargs.join(" ")
            var xo02 = message.guild.channels.find('name', 'pwchat-taverne-🍻');
            if(!xo02) return message.reply("Le channel **pwchat-taverne-🍻** est introuvable")
            if(message.channel.name !== 'pwchat-taverne-🍻') return message.reply("Commande à effectuer dans **pwchat-taverne-🍻**")
            if(!xo03) return message.reply("Merci d'écrire un message qui sera envoyé à tous les serveurs de PastelWorld.")
            var embed = new Discord.RichEmbed()
            .setColor("0x88CC14")
            .setTitle("Pastel Message")
            .addField("Pseudo de l'utilisateur", message.author.username + "#" + message.author.discriminator, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© PastelWorld | Tous droits réservés.")
            .setTimestamp()
          bot.channels.findAll('name', 'pwchat-taverne-🍻').map(channel => channel.send(embed))
          message.delete();
            break;
          case "annonces":
            let xoargds = message.content.split(" ").slice(1);
            let xo03d = xoargds.join(" ")
            var xo02d = message.guild.channels.find('name', 'annonces');
            if(!xo02d) return message.reply("Le channel **annonces** est introuvable")
            if(message.channel.name !== 'annonces') return message.reply("Commande à effectuer dans **annonces**")
            if(!xo03d) return message.reply("Merci d'écrire un message qui sera envoyé à tous les serveurs de PastelWorld.")
            var embed = new Discord.RichEmbed()
            .setColor("0xFAA61A")
            .setTitle("Annonce")
            .setDescription(xo03d)
            .setFooter("© PastelWorld | Tous droits réservés.")
            .setTimestamp()
          bot.channels.findAll('name', 'annonces').map(channel => channel.send(embed))
            break;
    }
});

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
    }    
});

bot.on('message', message => {
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "MS");  
    }
});  

bot.on('message', message => {

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setTitle("Voici la liste des commandes")
        .addField("§help", "Liste des commandes")
        .addField("§avatar", "Ton avatar")
        .addField("§info", "Informations du discord")
        .addField("§ping", "Latence entre le bot et le serveur")
        .addField("§site", "Site de NeYziX")
        .addField("§chat", "Chat relié avec tous les serveurs de PastelWorld")
        .addField("§8ball", "Question au bot | Réponse en Oui ou Non")
        .addField("§clear", "Staff > Clear 50 messages")
        .setFooter("© PastelWorld | Tous droits réservés.")
        .setColor("0x2E9AFE")
        .setTimestamp()
    message.channel.sendEmbed(embed)
    }
});    

bot.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord :")
        .addField("Nom du Discord :", message.guild.name)        
        .addField("Crée le :", "19/01/18 20:09:34")
        .addField("Crée par :", message.guild.owner)
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .addField("ID :", "403989383423721472")
        .setFooter("© PastelWorld | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "créateur") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour visiter le site du créateur :")
        .addField("Lien :", "http://xrainbow.000webhostapp.com")
        .setFooter("© PastelWorld | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "sm") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de PastelWorld :")
        .addField("Instagram :", "https://www.instagram.com/pastelworld_officiel/") 
        .setFooter("© PastelWorld | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "socialmedia") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de PastelWorld :")
        .addField("Instagram :", "https://www.instagram.com/pastelworld_officiel/")
        .setFooter("© PastelWorld | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "☺")
        bot.channels.get('434344990508843011').send("EZ");
  
    bot.channels.get('434344990508843011').send("Réaction utilisée : " + reaction.emoji.name);
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member}, allez dans le #conditions-ďutilisation puis mettez une réaction :bust_in_silhouette:  **(après avoir lu les règles)** ;)`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} a quitté PastelWorld. Nous te souhaitons une bonne continuation.`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Nouveaux');
    member.addRole(role)
})
