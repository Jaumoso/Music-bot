module.exports = {
    name: 'remindme',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}remindme',

    execute(client, message) {
        // accepted messages will be those from the same author, we compare IDs to make sure
        const filter = msg => msg.author.id == message.author.id;
        // Errors: ['time'] treats ending because of the time limit as an error
        channel.awaitMessages(filter, { max: 4, time: 60000, errors: ['time'] })
        .then(collected => console.log(collected.size))
        .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));

        // request
        message.channel.send("¿Qué quieres que te recuerde?");
        
        // collector
        let collector = await message.channel.awaitMessages(filter, options);
        let answer = collector.first().content;
        
        // response
        await message.reply("Te recordaré que" + answer + "!");
    },
};
