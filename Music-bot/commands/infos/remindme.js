module.exports = {
    name: 'remindme',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}remindme',

    execute(client, message,args) {
        if (args.lenght == 0)
            message.channel.send(`¿Qué quieres que te recuerde?`);
    },
};
