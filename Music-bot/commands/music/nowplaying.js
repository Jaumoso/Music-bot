module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Debes estar en un canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Debes estar en el mismo canal de voz que yo.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay nada reproduciéndose.`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'This bot uses a Github project made by Zerio (ZerioDev/Music-bot)' },
                fields: [
                    { name: 'Canal', value: track.author, inline: true },
                    { name: 'Solicitado por', value: track.requestedBy.username, inline: true },
                    { name: 'Es una playlist', value: track.fromPlaylist ? 'Sí' : 'No', inline: true },

                    { name: 'Visualizaciones', value: track.views, inline: true },
                    { name: 'Duración', value: track.duration, inline: true },
                    { name: 'Filtros activados', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volumen', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Modo repetición', value: client.player.getQueue(message).repeatMode ? 'Sí' : 'No', inline: true },
                    { name: 'Pausado ahora', value: client.player.getQueue(message).paused ? 'Sí' : 'No', inline: true },

                    { name: 'Barra de progreso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};