const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = "94786802371"
global.mongodb = process.env.MONGODB_URI || "mongodb://ugykkx9yl6qknshgcown:lJ18kzUxXP5IqyyUZZc@bdzoktb5vy7mozj8zh6k-mongodb.services.clever-cloud.com:2319/bdzoktb5vy7mozj8zh6k"
global.port= process.env.PORT || 3000
global.email = 'nimeshofficial.info@gmail.com'
global.github = 'https://github.com/nimesh-official/Black-Dragon'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94786802371'
global.devs = '94786802371';
global.website = 'https://github.com/nimesh-official/Black-Dragon'
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/17d25248a18357d93d98e.jpg'
module.exports = {
  botname:   process.env.BOT_NAME || 'Black Dragon',
  ownername: process.env.OWNER_NAME || 'Nimesh Official',
  sessionName:  process.env.SESSION_ID || 'Blackdragon;;;93QHXL7I#z7FsuiPEsD4RVBIOFELOE98SZXcwFrVGDiue3SxDz78',
  author:  process.env.PACK_INFO === (";")[0] || 'Nimesh Official',
  auto_read_status :  process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_INFO === (";")[1] || 'Black-Dragon',
  autoreaction:  process.env.AUTO_REACTION || 'false',
  antibadword :  process.env.ANTI_BAD_WORD || 'nbwoed',
  alwaysonline:  process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '971',
  readmessage:  process.env.READ_MESSAGE || 'true',
  auto_status_saver: process.env.AUTO_STATUS_SAVER || 'false',
  HANDLERS:  process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || '3',
  disablepm:  process.env.DISABLE_PM || 'false',
  levelupmessage:  process.env.LEVEL_UP_MESSAGE || 'false',
  antilink:  process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE || '',
  autobio:  process.env.AUTO_BIO || 'false',
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY || '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',
  heroku:  process.env.heroku || 'false',
  HEROKU: {
    HEROKU: process.env.HEROKU || 'false',
    API_KEY: process.env.HEROKU_API_KEY || '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab',
    APP_NAME: process.env.HEROKU_APP_NAME || 'zeropgg'
},
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME || 'DRAGON',
  WORKTYPE: process.env.WORKTYPE || 'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
