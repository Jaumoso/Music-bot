module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Debes estar en un canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Debes estar en el mismo canal de voz que yo.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay nada reproduciéndose.`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Please specify a valid filter to enable or disable !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - This filter doesn't exist, try for example (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Estoy **añadiendo** el filtro a la música, por favor espera... Aviso : cuanto má slarga la canción, más tardará el proceso.`);
        else message.channel.send(`${client.emotes.music} - Estoy **quitando** el filtro a la música, por favor espera... Aviso : cuanto má slarga la canción, más tardará el proceso.`);
    },
};