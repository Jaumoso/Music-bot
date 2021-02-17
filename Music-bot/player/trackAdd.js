module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} se ha añadido a la cola.`);
};