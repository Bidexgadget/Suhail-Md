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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_23_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYxLFxuICAgICAgICA1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDY3LFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyOSxcbiAgICAgICAgNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM1LFxuICAgICAgICA4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYxLFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZWjYreXB0Qlp4ZHh6NkVpVC85MWNvbnUvQ09XNXdQa1BFTTdDOUtKdHFjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmWGZERWFxMFFZZUt1YXh4SjRlZzhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUyZmIyMjAzLTkyMjUtNDk2NS05NDQ0LWNlYTQzOGFlZjZlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDQ3LFxuICAgICAgMTk4LFxuICAgICAgMTczLFxuICAgICAgMTU5LFxuICAgICAgMTgwLFxuICAgICAgMjE4LFxuICAgICAgMzksXG4gICAgICAxMjgsXG4gICAgICAxMzUsXG4gICAgICAxMTEsXG4gICAgICA3MCxcbiAgICAgIDM3LFxuICAgICAgMjEwLFxuICAgICAgNjQsXG4gICAgICAyMixcbiAgICAgIDcyLFxuICAgICAgMjU1LFxuICAgICAgNzYsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMCxcbiAgICAgIDIyNSxcbiAgICAgIDEyMSxcbiAgICAgIDE5OCxcbiAgICAgIDk2LFxuICAgICAgNTYsXG4gICAgICAyNDAsXG4gICAgICAxMixcbiAgICAgIDk1LFxuICAgICAgMTkxLFxuICAgICAgMTYyLFxuICAgICAgMTAsXG4gICAgICA0NyxcbiAgICAgIDg3LFxuICAgICAgMjUxLFxuICAgICAgMjI2LFxuICAgICAgMjE0LFxuICAgICAgODQsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWVzM4N1NDMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNDAxODE0NzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMyMDMxOTkyMjk5NTgyOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pqMGhKWU9FTkRYZ3JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnRKSyttYXNCdmh4VnMvOE94YlIxcFJISU9tYjY3T2M3NXR3WDdyZUZUST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwYlRKdTdraTVIQUFpTmlFUWRhU3VGMWtRZ2l4WFpRYmdsZmZ0cWkvN1JOUEFIbWdQNk42Qk9IanE2Si82QjRPbkhscVBtUVlISHBpdmxERVRQZXJoZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXV1hJVisyM09NYjNVdWppOEJoV2tlU1cvRnV4d0xGRDY4ZE0xUDZwZFBDZHJEV28rYXoxRStmRlJGVWtiMkZFUU9NWEhyUElSWER4SmtpUVBNSDJCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM0MDE4MTQ3OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgwNTc3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURqSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGpILmpzb24iOiAie1wia2V5RGF0YVwiOlwiUnFwbDYrcnFnTEU3eHc4ZmllLzJWS09jSnM3YlpqU1NCTzQrTHg3RzJyaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODA0MzE0MTM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4MDU3ODYyMzBcIn0iCn0=


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
