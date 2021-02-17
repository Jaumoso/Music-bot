module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Debes estar en un canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Debes estar en el mismo canal de voz que yo.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay nada reproduciéndose.`);

        client.player.shuffle(message);

        return message.channel.send(`${client.emotes.success} - Se ha aleatorizado **${client.player.getQueue(message).tracks.length}** canción/canciones.`);
    },
};