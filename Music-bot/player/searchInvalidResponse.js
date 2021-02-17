module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - The selection has been **cancelled** !`);
    } else message.channel.send(`${client.emotes.error} - Debes enviar un número válido entre **1** y **${tracks.length}**.`);
};