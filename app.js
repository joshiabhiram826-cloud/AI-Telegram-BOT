const {Telegraf}=require('telegraf')
const bot=new Telegraf(process.env.TOKEN)
bot.start((ctx) => ctx.reply('Hi! I am a KLE Bot'));
bot.command('location', (ctx) => {ctx.replyWithLocation(15.3672, 75.1222)})
bot.launch();
console.log('Bot is Started');