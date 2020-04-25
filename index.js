require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.toLowerCase() === 'oi') {
    msg.react('👍')
  } else {
    msg.delete(1800000)
  }
});

bot.login(TOKEN);