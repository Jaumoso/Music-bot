var fs = require('fs');
var discord = require('discord.js');
var path = require('path');
var rand = Math.random();
fs.readFile('text/jokes.txt', 'utf8', function(err, data) {
    if (err) throw err;
    jokes = data.split('/fin/');
});
module.exports = {
    name: 'joke',
    aliases: [],
    category: 'Memes',
    utilisation: '{prefix}joke',

    execute(client, message) {        
        var choiceIndex = Math.floor(Math.random() * jokes.length)
        const response = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(jokes[choiceIndex])
        .setTimestamp()  
        message.channel.send(response);
    },
};