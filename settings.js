//base by DGXeon (Xeon Bot Inc.)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "6797309646"
global.ownername = "ɢʀᴇᴇᴋ"
global.ytname = "YT: NASSWORKS"
global.socialm = "Github: NASS-WORKS"
global.location = "Japan, akina"

global.ownernumber = '6797309646'  //creator number
global.ownername = 'ɢʀᴇᴇᴋ' //owner name
global.botname = 'BOT:ⁿɢʀᴇᴇᴋ' //name of the bot

//sticker details
global.packname = 'steal it its part of lord'
global.author = 'ɢʀᴇᴇᴋ👤'
//console view/theme
global.themeemoji = '👤'
global.wm = "ɢʀᴇᴇᴋ Bot Inc."

//theme link
global.link = 'wa.me//6797309646'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v3'

//reply messages
global.mess = {
    done: 'Approved',
    prem: 'This is restricted to peasants like you only premium users are allowed',
    admin: 'This feature is also restricted to peasants like you only the superior admins can use it',
    botAdmin: 'This feature can only be used when the bot is not a peasant but superior admin',
    owner: 'This feature can be used by my most superior masters lord ɢʀᴇᴇᴋ his wife, daughter and lord NATHAN only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'hold your horses... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
