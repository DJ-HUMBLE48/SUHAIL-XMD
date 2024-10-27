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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_35_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICA1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNixcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzLFxuICAgICAgICA0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNFoyOE9ybjYzNEttR0JCUFBLTGltUjFoQk9LOFBpVUJPWkFXUWp3aGgzMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidk04MzJqMlJUWnlkd2RDWjI2aG9Yd1wiLFxuICBcInBob25lSWRcIjogXCI4MTI3OTI5Zi0wYWY0LTRlY2UtYjE5Zi0yNjlhMjBiZjcxZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgOTksXG4gICAgICAyMyxcbiAgICAgIDEyNyxcbiAgICAgIDE1NixcbiAgICAgIDI1LFxuICAgICAgOTcsXG4gICAgICAyMzcsXG4gICAgICAxMzcsXG4gICAgICAxODIsXG4gICAgICAxODcsXG4gICAgICAyMzYsXG4gICAgICA4OCxcbiAgICAgIDMwLFxuICAgICAgMzgsXG4gICAgICAxMjUsXG4gICAgICAyMDAsXG4gICAgICAxODMsXG4gICAgICAyMTIsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDc3LFxuICAgICAgMjE0LFxuICAgICAgMTIsXG4gICAgICAxMDAsXG4gICAgICAyNDIsXG4gICAgICAyNTMsXG4gICAgICA3MixcbiAgICAgIDMxLFxuICAgICAgOTUsXG4gICAgICAxMjUsXG4gICAgICAyMDUsXG4gICAgICAyMTksXG4gICAgICAxOCxcbiAgICAgIDIxMSxcbiAgICAgIDIyNyxcbiAgICAgIDIyNSxcbiAgICAgIDE3MixcbiAgICAgIDM2LFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRWkE5UUs1TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTU1ODYwMjc0OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1Nzc4ODkzNTk5MTUyNjoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLclVzTThCRUtlRCtiZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZRVU5CU3R5a0pMSVkxbWZCbm8wa3BTMURveitvZ0JxRWIyZjR0Zk1abWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMnQ0RUpvdmpuTnhoNmtLc1Q5dzdPdDlIclRha2h6TTliTmVwaHBTRE9NNnZ2TW1xWkZVeFBkbU5VUkw0TmwwU0d6cnNDbmJLL0JpQVIwaFZHNGpnQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMHp2K2hQR0ZRWXlFdkxHNHQzUWhUekwvOUFia3RSamFNTkJ1VlNVVUV5ZS9sREdJdDJXbHpXUUxkcWVMMGdtVHA0OUNHSno2VkZDOWd4U0pJanZ2RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTU1ODYwMjc0OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMDM2MTM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRml3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGaXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRaG9lWC94c3dyZjkrT0ZMY1IyZzhSbU9oMGtnUytBWmdqRXViVjlyWS9zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQzNDkwNzY4NCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
