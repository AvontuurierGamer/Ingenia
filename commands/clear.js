const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission for this");

    if(!args[0]) return message.reply("enter quantity");

    if(Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if(args[0] <= 0) {
                message.reply("I cannot delete 0 messages").then(msg => msg.delete({timeout: 3000}));
            } else if(args[0] == 1) {
                message.reply("I deleted 1 post").then(msg => msg.delete({timeout: 3000}));
            } else {
                message.reply(`i have ${args[0]} message deleted`).then(msg => msg.delete({timeout: 3000}));
            }

        })

    }else{
        return message.reply("enter a number");
    }

}
    

module.exports.help = {
    name: "clear"
}