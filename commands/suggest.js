const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var suggest = args.join(' ');
    if(!suggest) return message.channel.send("no suggestion");

    var suggestEmbed = new discord.MessageEmbed()
        .setTitle(`Suggestion by ${message.author.username}`)
        .setColor("#ff0000")
        .addField("Suggestion", suggest)
        .setFooter("Suggest")
        .setTimestamp()
        .setImage(message.author.avatarURL())

    var channel = message.member.guild.channels.cache.get("797560984482742313")

    if(!channel) return message.channel.send("channel not found");

    message.delete();

    channel.send(suggestEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('🤷‍♂️');
        embedMessage.react('👎');
    });
    
}        

module.exports.help = {
    name: "suggest"
}