const Discord = require('discord.js');
const client = new Discord.Client();
var message = 'Ping';


client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
	
	var uppercase = msg.content.toUpperCase()
	
	 if (uppercase === 'PING' ) {
	 msg.reply('pong');
	 }
	 });

client.login('NjQ3NDQyNTM3Nzk5MjIxMjU5.Xdf95w.i8gu6sfmn3PmDWBTAnoxBY9r6s8');