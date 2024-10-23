const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233544937902";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_47_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4LFxuICAgICAgICA5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1LFxuICAgICAgICA4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMixcbiAgICAgICAgMTg0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibFc3SDUrYmYzVnRqVkxqMWhKMnB0Z3Vvc2JFaHNCOG5zNTZVQlo2YW5rdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid2tUMlhMTHpUY3l2N2d0LUhMdXlqd1wiLFxuICBcInBob25lSWRcIjogXCI0ZTJjNDE3NC04ZTg2LTRmNWQtOWZhYi01N2RhMDQ1YjYwNzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgODksXG4gICAgICAyMDksXG4gICAgICAyMDIsXG4gICAgICA3OSxcbiAgICAgIDEwMCxcbiAgICAgIDg4LFxuICAgICAgMTk0LFxuICAgICAgMjI2LFxuICAgICAgMTM2LFxuICAgICAgMTU4LFxuICAgICAgOTQsXG4gICAgICA2NCxcbiAgICAgIDEzMixcbiAgICAgIDI0NCxcbiAgICAgIDIyNCxcbiAgICAgIDE1OCxcbiAgICAgIDE5OCxcbiAgICAgIDE0NyxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAxMDUsXG4gICAgICAxMzIsXG4gICAgICAyMDUsXG4gICAgICAxMDksXG4gICAgICA3MCxcbiAgICAgIDEwMSxcbiAgICAgIDczLFxuICAgICAgMTM1LFxuICAgICAgMTY3LFxuICAgICAgMTk3LFxuICAgICAgMjQ3LFxuICAgICAgMjE3LFxuICAgICAgNDcsXG4gICAgICA0OSxcbiAgICAgIDIxOCxcbiAgICAgIDcwLFxuICAgICAgMTA4LFxuICAgICAgNjcsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5N1RIQlQ3RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTQ0OTM3OTAyOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MjYyODAwMzQ1NTEwMToyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcmVzK0lFRUozSDRiZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZKQjlTUDVtQlR2RXNOdmllUkxJNjdQS1ZTYTNrMWh5d3hFN0s2enAxR0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibkFXakx5dk1VRlcxTGQxb1BoNUhYaFFpekl1SzU1ZHdTRFJrRzBhdlYwMmg2M0NrakRub3Z5TTMra2JwbUxzSDlIelp3V3FtUkdBYkIxVXpXRXNSQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQVZreVV6ZEpXNnNlM2FSSDZtWEovMzRzWFRKOW13eTJRU1FpRFh0MlRHNGE0djFtZ3dGSk0xVmZscVh1cld1NU1TdytpYW5JVXRsckpwcWo0ZlhDQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQ0OTM3OTAyOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2NTE2MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMOW5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw5bi5qc29uIjogIntcImtleURhdGFcIjpcInoxaXY2dGtaQ2Q0UjJ5Qi9meVJNRkxXYU9pMTBINUVZUnF0Y1EvenhqWDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MDExMDM3NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
