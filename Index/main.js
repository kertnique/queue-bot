
'use strict';
const TelegramBot = require('node-telegram-bot-api');

const token = '1122460821:AAEvt2V7-zz6dKuSScXAKCeKJP6Wk2m54_c';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/start|help/, msg => {
  const chat = msg.chat.id;
  bot.sendMessage(chat, `To create new game, use command /create\n 
  To join existing game, use command /join and your game ID`);
});

bot.onText(/create/, msg => {
});

bot.onText(/join [0-9]+/, msg => {
});

bot.onText(/exit/, msg => {
});

bot.onText(/begin ([A-z]|[a-z])+/, msg => {
});

