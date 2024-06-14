const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('7219262786:AAFLOQQ-ugSc2_t9Z7tsmQk5eTgosA5UF_M');

// Site URL
const siteUrl = 'https://txclub.netlify.app/';

// Start command
bot.start((ctx) => {
    const firstName = ctx.from.first_name;
    const welcomeMessage = `🚀 Welcome, ${firstName}, to TXclub Crypto Coin Bot! 🌟\n\n`
        + `Explore TXclub's website for more information: ${siteUrl}\n\n`
        + `TXclub is your ultimate companion for crypto insights and news.`
        + `Stay updated with real-time prices, news updates, and more! 📈💰\n\n`
        + `Use the buttons below to explore:\n`;
    ctx.replyWithPhoto(
            { url: 'https://txclub.netlify.app/assets/favicon-C8Rwmzq9.jpg' },
            { caption: welcomeMessage }
        )
    // Send the welcome message with buttons
    ctx.reply(
        welcomeMessage,
        Markup.keyboard([
            [Markup.button.text('Current Prices')],
            [Markup.button.text('Latest News')],
            [Markup.button.text('Help')]
        ]).resize().oneTime()
    );
    // Open Web App button
    ctx.reply(
        'Click to open TXclub Web App:',
        Markup.inlineKeyboard([
            Markup.button.url('Open Web App', 'https://txclub.netlify.app/')
        ])
    );
});

   
// Help command
bot.help((ctx) => {
    ctx.reply('📚 Need help? Here are some available commands:\n'
        + '/prices - Get current crypto prices\n'
        + '/news - Read the latest crypto news\n'
        + '/about - Learn more about TXclub'
    );
});

// New article command
bot.command('newarticle', (ctx) => {
    ctx.reply(
        'Would you like to read the latest articles? Click the button below:',
        Markup.inlineKeyboard([
            Markup.button.url('Open TXclub', siteUrl)
        ])
    );
});

// Prices command
bot.command('prices', (ctx) => {
    ctx.reply('💹 Here are the current crypto prices:\n'
        + 'BTC: $45,000\n'
        + 'ETH: $3,000\n'
        + 'XRP: $1.5'
    );
});

// News command
bot.command('news', (ctx) => {
    ctx.reply('📰 Here are the latest crypto news:\n'
        + '1. Bitcoin hits new all-time high.\n'
        + '2. Ethereum upgrades to Proof of Stake.\n'
        + '3. Ripple partners with major banks.'
    );
});

// About command
bot.command('about', (ctx) => {
    ctx.reply('ℹ️ TXclub is your go-to bot for all things crypto! '
        + 'Stay informed with real-time data and news updates. 🚀'
    );
});

bot.launch();
