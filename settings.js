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
global.ownernomer = "6797309646","918618971837","2348068620970"
global.ownername = "ɢʀᴇᴇᴋ"
global.ytname = "YT: Microsoft"
global.socialm = "Github: zeus30007"
global.location = "USA, new York"

global.ownernumber = '6797309646'  //creator number
global.ownername = 'ɢʀᴇᴇᴋ' //owner name
global.botname = 'MICROSOFT TECHNICAL SUPPORT' //name of the bot

//sticker details
global.packname = 'steal it and your company will have virus'
global.author = 'Microsoft'
//console view/theme
global.themeemoji = '👤'
global.wm = "ɢʀᴇᴇᴋ Bot Inc."

//theme link
global.link = 'wa.me//6797309646'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
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
global.typemenu = 'V1'

//reply messages
global.mess = {
    done: 'your request as been Approved',
    prem: 'This is restricted to non premium users are allowed',
    admin: 'This feature is also restricted only admins can use it',
    botAdmin: 'This feature can only be used when the Microsoft technical support is admin',
    owner: 'This feature can be used by my Microsoft owners',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'wait for vwe are processing... ',    
    error: 'there was an Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
