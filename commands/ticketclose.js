const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const categoryID = "799325758022877234";

    if(!message.member.hasPermission("KICK_MEMBER")) return message.reply(`${message.author} je kan dit niet doen!`);

    if(message.channel.parentID == categoryID) {
        message.channel.delete();

    var embedCreateTicket = new discord.MessageEmbed()
        .setTitle("Ticket, " + message.channel.name)
        .setDescription("the ticket is marked as **compleet**.")
        .setFooter("Ticket closed");

    var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "logs");
    if (!ticketChannel) return message.reply("Channel does not exist");

    ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("this must be in a ticket.");

    }
    
}
    

module.exports.help = {
    name: "close"
}