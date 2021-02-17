module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Debes estar en un canal de voz`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Debes estar en el mismo canal de voz que yo`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay nada reproduciendose`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - La canción ya está en pausa`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - ${client.player.getQueue(message).playing.title} en pausa.`);
    },
};