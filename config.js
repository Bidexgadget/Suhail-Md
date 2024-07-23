const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_34_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICA5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMwLFxuICAgICAgICA5NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIyLFxuICAgICAgICA1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInkyRWxNaW9CbFJJcnBJL3ppVG81cXpHSTVSdngzNlc3M1RibnZIb1pNWkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9Ba1NiRHpXUUJtUmxHQ1ZWVWNfaFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWExOTczOGMtYmJhNy00ZWEzLWE1ODEtZjBhZGIzYTI2MzY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDEwMCxcbiAgICAgIDE5NixcbiAgICAgIDE0MyxcbiAgICAgIDE2LFxuICAgICAgMTQ5LFxuICAgICAgOTYsXG4gICAgICAyMTUsXG4gICAgICAxNjgsXG4gICAgICAxOTksXG4gICAgICAyMjQsXG4gICAgICAxOTAsXG4gICAgICAxMDYsXG4gICAgICAzNixcbiAgICAgIDIwNSxcbiAgICAgIDYxLFxuICAgICAgMTI3LFxuICAgICAgMTI1LFxuICAgICAgMTM5LFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDEyOCxcbiAgICAgIDIxNyxcbiAgICAgIDE2OSxcbiAgICAgIDE3MCxcbiAgICAgIDk2LFxuICAgICAgMTExLFxuICAgICAgMTcwLFxuICAgICAgMTgsXG4gICAgICAxMzUsXG4gICAgICAxNzMsXG4gICAgICAxODgsXG4gICAgICA5MSxcbiAgICAgIDE4NCxcbiAgICAgIDkzLFxuICAgICAgNjQsXG4gICAgICA5MSxcbiAgICAgIDE1NyxcbiAgICAgIDE1LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko4WENWRllFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM0MDE4MTQ3OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzIwMzE5OTIyOTk1ODI6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzM3enRzTkVKVHkvYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCdEpLK21hc0J2aHhWcy84T3hiUjFwUkhJT21iNjdPYzc1dHdYN3JlRlRJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImh1WVZzRjhRN3pBQVRpOW1nMHhUSFVHVDB2b015WjlvYWtuNjdhd2NJMnhsNStVNzd6ZVUxcG9tNWJUMmJ1SUtCbG56VUwzOEJ4TXdnVkZBZ2tObWl3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFmc0o0WHRtclVIaFdjNUJJZlNQaUJYQU1CODR6a0kyeG44Rk95TU96OHo0cjNYZVIyaTAzbG9Pa1U0V1Y5Y3VobFdKKzUyQUZza2ZWZ1RrWW5jRWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzQwMTgxNDc6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzI3MjU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjU2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFONTYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvVFVUWUsvQ2twcFgrbTBoaFpBdE9EQ2lKZ2Q0MlFWRzNKaHRrc0NLNnNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2ODE3OTU1MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTcyNzI2MjM1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
