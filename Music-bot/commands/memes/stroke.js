var fs = require('fs');
var discord = require('discord.js');
var path = require('path');
var rand = Math.random();
fs.readFile('text/stroke.txt', 'utf8', function(err, data) {
    if (err) throw err;
    stroke = data.split('/fin/');
});
module.exports = {
    name: 'stroke',
    aliases: [],
    category: 'Memes',
    utilisation: '{prefix}stroke. Hace que el bot diga alguna sandez.',

    execute(client, message) {        
        var choiceIndex = Math.floor(Math.random() * (stroke.length - 1))
        result = stroke[choiceIndex];
        const response = new discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(result)
        .setTimestamp()  
        message.channel.send(response);
        console.log(choiceIndex);
    },
};