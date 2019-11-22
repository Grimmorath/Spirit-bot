const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login('NjQ3NDQyNTM3Nzk5MjIxMjU5.XdfwHg.bWCI37ZBqqJenwtr9rmWKf_ZiCM');