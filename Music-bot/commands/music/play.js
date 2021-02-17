module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [términos de búsqueda o una URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Debes estar en un canal de voz`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Debes estar en el mismo canal de voz que yo.`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Debes indicar el título de la canción o pasar una URL`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};