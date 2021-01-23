const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("help")
        .addField("other = 😉")
        .addField("staff = ⭐")
        .addField("ticket = 🎫")
        .addField("fun = 😁")
        .addField("Cancel = ❌")
        .setFooter(`${message.author.username}`)
        .setTimestamp()

    var embedhelpoverig = new discord.MessageEmbed()
        .setTitle("Help")
        .setColor("#03fc0f")
        .addFields(
            {name: "!userinfo", value: "see player information"},
            {name: "!suggest", value: "write a suggestion"},
        )
        .setFooter(`${message.author.username}`)
        .setTimestamp()

    var embedhelpfun =  new discord.MessageEmbed()
        .setTitle("help")
        .setColor("#03fc0f")
        .addFields(
            {name:"rps", value: "Play rock paper scissors against the bot"}
        )
        .setFooter(`${message.author.username}`)
        .setTimestamp()

        var embedhelpmod =  new discord.MessageEmbed()
            .setTitle("Help")
            .setColor("#03fc0f")
            .addFields(
                {name:"embed", value: "create an embed in a particular channel"},
                {name: "kick", value: "with this a staff member can kick someone"},
                {name: "ban", value: "this allows a staff member to ban someone"},
                {name: "clear", value: "delete some messages"}
            )
            .setFooter(`${message.author.username}`)
            .setTimestamp()

        var embedhelpticket =  new discord.MessageEmbed()
            .setTitle("help")
            .setColor("#03fc0f")
            .addFields(
                {name:"ticket", value: "create a ticket"},
                {name: "close", value: "close a ticket this can only be done by a staff member"},
                {name: "add", value: "add someone to a ticket"},
                {name: "remove", value: "remove someone from a ticket"}
            )
            .setFooter(`${message.author.username}`)
            .setTimestamp()

    message.channel.send(embedPrompt).then(async msg => {

        message.delete();

        var emoji = await promptMessage(msg, message.author, 30, ["😉", "⭐", "🎫", "😁", "❌"])

        if(emoji == "😉") {

            msg.reactions.removeAll()

            msg.edit(embedhelpoverig).then((msg) =>  {
                setTimeout(function(){
                msg.edit(embedhelpoverig);
                }, 1)
            })

            var emoji = await promptMessage(msg, message.author, 30, ["❌"])

            if(emoji == "❌") {

                msg.delete();

            }

        } else if(emoji == "⭐") {

            msg.reactions.removeAll()

            msg.edit(embedhelpmod).then((msg) =>  {
                setTimeout(function(){
                msg.edit(embedhelpmod);
                }, 1)
            })

            var emoji = await promptMessage(msg, message.author, 30, ["❌"])

            if(emoji == "❌") {

                msg.delete();
                
            }

        } else if(emoji == "🎫") {

            msg.reactions.removeAll()

            msg.edit(embedhelpticket).then((msg) =>  {
                setTimeout(function(){
                msg.edit(embedhelpticket);
                }, 1)
            })

            var emoji = await promptMessage(msg, message.author, 30, ["❌"])

            if(emoji == "❌") {

                msg.delete();
                
            }

        } else if(emoji == "😁") {

            msg.reactions.removeAll()

            msg.edit(embedhelpfun).then((msg) =>  {
                setTimeout(function(){
                msg.edit(embedhelpfun);
                }, 1)
            })

            var emoji = await promptMessage(msg, message.author, 30, ["❌"])

            if(emoji == "❌") {

                msg.delete();
                
            }

        } else if(emoji == "❌") {

            msg.reactions.removeAll()

            msg.delete();

        }

    });
    
}

async function promptMessage(message, author, time, reactions) {

    time *= 1000;

    for (const reaction of reactions) {
        await message.react(reaction);
    }

    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);

}
    

module.exports.help = {
    name: "help"
}