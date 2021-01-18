const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You do not have access to this");

    var seperator = "/";

    if(args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("use")
            .setColor("#00ee00")
            .setDescription(`Create an embed using: \n !embed title ${seperator} message ${seperator} color ${seperator} channel`);

        return message.reply(embed).then(msg => msg.delete({timeout: 5000}));

    }

    var argsList = args.join(" ").split(seperator);

    if(argsList[2] === undefined) argsList[2] = "#eeeeee";
    if(argsList[3] === undefined) argsList[3] = "📢•mededelingen";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "No content provided",
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()

    }

    var embedEmbed = new discord.MessageEmbed()
        .setTitle(`${options.titel}`)
        .setColor(options.kleur)
        .setDescription(`${options.bericht}`)
        .setTimestamp();
        
    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if(!channel) return message.reply("channel does not exist");

    channel.send(embedEmbed);
    
}
    

module.exports.help = {
    name: "embed"
}