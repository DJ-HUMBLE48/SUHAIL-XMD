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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233544937902";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_46_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkxLFxuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3LFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMixcbiAgICAgICAgMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICA3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDg3LFxuICAgICAgICA5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NixcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgxLFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMixcbiAgICAgICAgMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFzd3pHazZ5VXpmZTExRlNFZHlXZ0xCT0hYc1BjT0d5Qjd3azE2aHF0eEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRrbTJ0SV85VFJDVEtyQXhlRE9kLWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjMyNTZlZmItOGFjZi00OWEwLWEwNWUtNDkyNTRmM2NlNjZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDIyNixcbiAgICAgIDIxMSxcbiAgICAgIDEzNixcbiAgICAgIDE1NSxcbiAgICAgIDE2LFxuICAgICAgMTU1LFxuICAgICAgMTkxLFxuICAgICAgMTQ1LFxuICAgICAgMjEsXG4gICAgICAxMDQsXG4gICAgICA4NCxcbiAgICAgIDExLFxuICAgICAgMTM2LFxuICAgICAgMTczLFxuICAgICAgNDgsXG4gICAgICAxNzAsXG4gICAgICAyNDQsXG4gICAgICAyMTMsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgNDUsXG4gICAgICA1OSxcbiAgICAgIDE4NixcbiAgICAgIDYwLFxuICAgICAgMTc5LFxuICAgICAgMTk2LFxuICAgICAgMTkxLFxuICAgICAgNixcbiAgICAgIDQwLFxuICAgICAgMTg4LFxuICAgICAgNzIsXG4gICAgICAyMTQsXG4gICAgICAzMixcbiAgICAgIDE2OSxcbiAgICAgIDIyOCxcbiAgICAgIDE1NSxcbiAgICAgIDIyNixcbiAgICAgIDE2MSxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVNTcU5VREVOK3g1cmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZeUwrLzRLdnpaeHU2S01VTXN5bWNjM2djN1Ywemp1TkZQdE42eFBlRzJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkt0cVdOZjE4M2lVNXY5RHIvSHlaemJtU1FDbExqM1lpN3hUR2J1bzFwbG5QZU1IMmtYL244WHdQT3VpZElBenBlbmtkaGxKSEpWbnIveVFBdkF5ZEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjd2VU80T2V1K1U2SE9keGZJSUZuMldUY2Fla3JpajlhNDhhdGhJTzFOTUZHbWVFRmtwUVcxNjllWW1VNWd3aTJRV01HY0h3NDR5NllMLzRqdFphV2hRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTQzNDQzODAyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Yv/CdmYUg8J2Zg/CdmarwnZmi8J2Zl/CdmaHwnZmaNDhcIixcbiAgICBcImxpZFwiOiBcIjc1MDUwNDA5NTI5NDU1OjEyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQzNDQzODAyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NzMwNzg4XG59Igp9"  // PUT your SESSION_ID 


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
