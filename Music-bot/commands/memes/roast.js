var fs = require('fs');
var discord = require('discord.js');
const client = new discord.Client();
var path = require('path');
var rand = Math.random();
fs.readFile('text/roast.txt', 'utf8', function(err, data) {
    if (err) throw err;
    roast = data.split('/fin/');
});

/*     function getUserFromMentionRegEx(mention) {
	const matches = mention.match(/^<@!?(\d+)>$/);
	const id = matches[1];
	return client.users.cache.get(id);
} */

module.exports = {
    name: 'roast',
    aliases: [],
    category: 'Memes',
    utilisation: '{prefix}roast',

    execute(client, message, args) {
        const noArgs = new discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('Debes mencionar a alguien para que le haga el roast. Ej: @ALX_')
            .setTimestamp()
        if(!args[0])
            message.channel.send(noArgs);
        else {
            var choiceIndex = Math.floor(Math.random() * roast.length)
            const withArgs = args[0] + roast[choiceIndex]
            message.channel.send(withArgs);
        }
    },
};