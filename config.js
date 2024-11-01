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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_18_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDY3LFxuICAgICAgICA1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNktJZUdlZU9kV0pUNEkrY0VLaDQ3L2V1aWp6MjVYZUFLMERjckNQcTlLcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1NDM0NDM4MDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg4QUYzNjAxMEVCQkY3RDgxN0MzODRGRUZENEZCRjdDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDQ5NTkxOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPSnJFczd3VFEzdU9xSlhfVWZOOGN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU3NmQ0M2U4LWFkMjMtNDg1MS04OTc2LTVkNWY5ZDZmOGU2NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMTksXG4gICAgICA0MCxcbiAgICAgIDIzMixcbiAgICAgIDIyLFxuICAgICAgMzgsXG4gICAgICAxNDEsXG4gICAgICAyMjAsXG4gICAgICAyMjgsXG4gICAgICAxMCxcbiAgICAgIDEyOCxcbiAgICAgIDIzLFxuICAgICAgMTM4LFxuICAgICAgMTM0LFxuICAgICAgNDQsXG4gICAgICAzMCxcbiAgICAgIDExOCxcbiAgICAgIDE0MSxcbiAgICAgIDc0LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgNjEsXG4gICAgICAyMzIsXG4gICAgICAxMTAsXG4gICAgICAxNzQsXG4gICAgICAzNyxcbiAgICAgIDY1LFxuICAgICAgMTAyLFxuICAgICAgMTM0LFxuICAgICAgNjksXG4gICAgICAyOSxcbiAgICAgIDUsXG4gICAgICAyMzgsXG4gICAgICAyMDgsXG4gICAgICA5NyxcbiAgICAgIDExOCxcbiAgICAgIDE1LFxuICAgICAgMjEsXG4gICAgICAxMDIsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1NON0pCMjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU0MzQ0MzgwMjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmL/wnZmFIPCdmYPwnZmq8J2ZovCdmZfwnZmh8J2ZmjQ4XCIsXG4gICAgXCJsaWRcIjogXCI3NTA1MDQwOTUyOTQ1NToxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZVNxTlVERUl1TGxia0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIll5TCsvNEt2elp4dTZLTVVNc3ltY2MzZ2M3VjB6anVORlB0TjZ4UGVHMnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiazV5UUxXMmVUQ25SUS9WR1Rsb0t6R0czYVpXYnJ5OVNOV2pNbHYzNGk0YzRHVElGbHNLdnVjdzJvSDhCMkNBYkhmTUYrRVprUWp2Q2R2eUtwaGp2QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibVRvM2lFNnhrclAwdTJGQWRwZXZZbjFkeDZ4WnlPeVpmQzJkZmp3NjZUdm12bGxNRDgwaDBqd0hqQnhBN2EyYnZVK0JxdExUT3VuWUIyUURkcy9JZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQzNDQzODAyOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDk1ODg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXJrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNcmsuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
