module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [términos de búsqueda o URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Debes estar en canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Debes estar en el mismo canal de voz que yo`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor, indica el titulo de la canción.`);

        client.player.play(message, args.join(" "));
    },
};