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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_25_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI4LFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICA1MixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDczLFxuICAgICAgICAyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMixcbiAgICAgICAgNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICA2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpiVWh5SFBqdktTdlhHakJ5MGZpZGMyZkw2SW5nRGhJZ2tlaEJyUFVqZVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzNTQ0OTM3OTAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCM0EwRDAzMUQwQkQ5MzhEQkFBMUVBMEVGNEU1NDVGMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkzMjYyOThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1NDQ5Mzc5MDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE3NTdFNkU2RjcyMUU0NEY1MzYyNzRGNzE4RTJGNEM0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTMyNjMwMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvMlhqTDFFa1NCdURYSFZRWWtCVFZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk5ZDlmZWE5LWIzNmMtNGZlZi1iYzI4LTY5YjY1M2QyNGNjM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDEyNSxcbiAgICAgIDQ0LFxuICAgICAgMTYsXG4gICAgICAzNyxcbiAgICAgIDc5LFxuICAgICAgMTY0LFxuICAgICAgOTAsXG4gICAgICAyNDQsXG4gICAgICA1OCxcbiAgICAgIDYsXG4gICAgICAxMzMsXG4gICAgICAyNixcbiAgICAgIDIyMixcbiAgICAgIDE0MCxcbiAgICAgIDkwLFxuICAgICAgOTcsXG4gICAgICA0NCxcbiAgICAgIDEwLFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMjUsXG4gICAgICAxMCxcbiAgICAgIDE1MyxcbiAgICAgIDYwLFxuICAgICAgMjE4LFxuICAgICAgNjcsXG4gICAgICAyMjQsXG4gICAgICAyMDksXG4gICAgICA1NixcbiAgICAgIDE3LFxuICAgICAgOSxcbiAgICAgIDYzLFxuICAgICAgMjQ0LFxuICAgICAgOTYsXG4gICAgICAzNCxcbiAgICAgIDIyMCxcbiAgICAgIDEwLFxuICAgICAgMTk4LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTdRMlFYSExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU0NDkzNzkwMjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDI2MjgwMDM0NTUxMDE6MTZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVC1qYXkgb3JpZ2luYWxcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLWGVzK0lFRU5UWnpiZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZKQjlTUDVtQlR2RXNOdmllUkxJNjdQS1ZTYTNrMWh5d3hFN0s2enAxR0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiei9UL2JCMGVFSlRpWHliK0kvM1lkT0hWMEphdzZtMEhXVzc1MzhzdHN1dEVSdmhId2kyRWpBOTNjSEVuUTNQS0h4cUF5TUljVGpZTXMvNit0TlJYQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieDdOUHlXa2lWUmIwZEloMTdFUmRJZllXbFc4RklkOS9jNTdqN1pRZlZmU0NrZ0ltcHRzUll0Qm1DSldKVWo5K1dXUjdMRjZodWhINUJpZkJJOVN2aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQ0OTM3OTAyOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkzMjYyOTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBeW1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF5bS5qc29uIjogIntcImtleURhdGFcIjpcInpKbWQvbWxpUk5Gb1pZcm1mZDBSSzhFRDg0MFREa1pqeG4zUjNxVitFcmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MDExMDM3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5MzI2Mjk4MTkyXCJ9Igp9"  // PUT your SESSION_ID 


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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
