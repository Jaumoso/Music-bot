module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Debes estar en un canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Debes estar en el mismo canal de voz que yo.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay nada reproduciéndose.`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Por favor introduce un número válido.`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Por favor introduce un número válido [1 a 100].`);

        client.player.setVolume(message, parseInt(args[0]));

        message.channel.send(`${client.emotes.success} - Volumen ajustado a **${parseInt(args[0])}%** !`);
    },
};