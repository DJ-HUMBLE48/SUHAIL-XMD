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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://www.dropbox.com/scl/fi/48ce4drkddipujkv7ajmu/1834435532.png.jpg?rlkey=bmqwriyagoppipvpn4euvizbg&dl=0" || "https://www.dropbox.com/scl/fi/48ce4drkddipujkv7ajmu/1834435532.png.jpg?rlkey=bmqwriyagoppipvpn4euvizbg&dl=0" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© DJ Humble48" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233543443802";




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
global.reply_status_from = process.env.REPLY_STATUS || "true"
global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_53_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU1LFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDY4LFxuICAgICAgICA3NCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNixcbiAgICAgICAgODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDk4LFxuICAgICAgICA3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUwLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDg5LFxuICAgICAgICA4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNW9xRmlYcUtvbHdIdllFZDZjUWtzRjl3cFFscXdsdE1SK05IVGhGZG5iWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidWZVdUxOaGtRMHFaWmdBZjhQU1owd1wiLFxuICBcInBob25lSWRcIjogXCI3YzcyYjAwYi0zOGVjLTQ3OGMtYjNlZC05OGEyZDEwNTU0YTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMjI0LFxuICAgICAgMjI2LFxuICAgICAgMTQ3LFxuICAgICAgNjEsXG4gICAgICAzNSxcbiAgICAgIDE5MSxcbiAgICAgIDIyLFxuICAgICAgMTE2LFxuICAgICAgMTcsXG4gICAgICAyNDEsXG4gICAgICAxODgsXG4gICAgICAxNyxcbiAgICAgIDEwNyxcbiAgICAgIDY3LFxuICAgICAgMjM3LFxuICAgICAgMTc1LFxuICAgICAgMTQ5LFxuICAgICAgNjgsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICA1NyxcbiAgICAgIDE2OCxcbiAgICAgIDE1NixcbiAgICAgIDE0LFxuICAgICAgOSxcbiAgICAgIDI1MixcbiAgICAgIDkzLFxuICAgICAgMjAyLFxuICAgICAgMTczLFxuICAgICAgOTksXG4gICAgICA4NixcbiAgICAgIDk2LFxuICAgICAgMjUxLFxuICAgICAgMTYxLFxuICAgICAgMjYsXG4gICAgICAyMSxcbiAgICAgIDIwNyxcbiAgICAgIDY4LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFZFMTJYUFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU0MzQ0MzgwMjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmL/wnZmFIPCdmYPwnZmq8J2ZovCdmZfwnZmh8J2ZmjQ4XCIsXG4gICAgXCJsaWRcIjogXCI3NTA1MDQwOTUyOTQ1NToxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZVNxTlVERUtXbG1Ma0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIll5TCsvNEt2elp4dTZLTVVNc3ltY2MzZ2M3VjB6anVORlB0TjZ4UGVHMnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVStIWDZKRGNJSStESm4ybytoWDZYd0lZcGJQM1dQa091WU1FMEFNaVJsbFd4SDNBRHlSMXh2WHdzMmY5bGF1M1VEQkxpeXh5RUpxMVRxby9EdExGQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidmhCTmZFYjFOOGU3T21tNWVXYmVXbTh3MEVzeERYSHdTcnc4TmdjMms1V04zdm0zcjdlZmppdGRHY1RmRXdHbks2WG1zejdZbzhxb01YUitHTTFBakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQzNDQzODAyOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTQ4MzkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXJrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNcmsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5dzVNeGVOZURGZXlMOVloRE13TE50UFV4K3YwOExwMWsvSzQvMXZpeC80PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk4NDIyMjAyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMDMxMjgwOTI3N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Humble-MD",
  ownername:process.env.OWNER_NAME|| "Humble-MD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Humble"  ).toUpperCase(),



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
