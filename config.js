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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_00_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA5LFxuICAgICAgICA1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc2LFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDM1LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTc5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNyxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkzLFxuICAgICAgICA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibDBnWCt2WEhzaHdEbFBhZ3ZNbUpSSDZ0Wld0UjFuc3RBRnhUTTY5Qy91TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMHBpTWVhUlFTWUdBUmFKYmdJVUpKZ1wiLFxuICBcInBob25lSWRcIjogXCI3ODJmNjhhNS1mMmVkLTQzZDgtOTA1Zi01MTM0N2Q2ZDhiZDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgMjM3LFxuICAgICAgMTk1LFxuICAgICAgMTA5LFxuICAgICAgMjExLFxuICAgICAgMTEwLFxuICAgICAgMjIyLFxuICAgICAgMTU4LFxuICAgICAgOTUsXG4gICAgICAxODYsXG4gICAgICAxNzYsXG4gICAgICAxMTEsXG4gICAgICAxNTQsXG4gICAgICAxMTIsXG4gICAgICA0MCxcbiAgICAgIDg2LFxuICAgICAgMTg0LFxuICAgICAgMTA3LFxuICAgICAgMCxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMzAsXG4gICAgICAyMzMsXG4gICAgICAyMTYsXG4gICAgICAxOSxcbiAgICAgIDIyNCxcbiAgICAgIDgwLFxuICAgICAgNjYsXG4gICAgICAxODQsXG4gICAgICAxMTUsXG4gICAgICAyMixcbiAgICAgIDEzMCxcbiAgICAgIDQ0LFxuICAgICAgMjMsXG4gICAgICA1NyxcbiAgICAgIDE0NyxcbiAgICAgIDE5NyxcbiAgICAgIDUyLFxuICAgICAgNjYsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBWTYzSzlLM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTQzNDQzODAyOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Yv/CdmYUg8J2Zg/CdmarwnZmi8J2Zl/CdmaHwnZmaNDhcIixcbiAgICBcImxpZFwiOiBcIjc1MDUwNDA5NTI5NDU1OjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01XU3FOVURFS2Y2NmJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWXlMKy80S3Z6Wnh1NktNVU1zeW1jYzNnYzdWMHpqdU5GUHRONnhQZUcycz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRL2VBelF6RldtM3FhY01BZVArZE1OSUdndm00SmlCVjBYVkRGeUpMaTN4cE9WNkZ0OW0rNTlHVFZGUTBPVmJodVpoR3pLbjQ1Q3ZFWXlrRjNYQ25Edz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1Z3JoNDB6MitYcW5uNmlmNVNTZVREQUFUbXlDOWxmY0NReHVtZVNPbXk3SGFyNFhsYjZ3by9WeisrSlB2a1hiYzJRUXRBM1YvRFJUUUh1WThvQ3FqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NDM0NDM4MDI6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk3ODkyMjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcTZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1xNi5qc29uIjogIntcImtleURhdGFcIjpcIk16R0dSOXk5a1d5UVdHQk1qb2M4QythVVFseEVMRkdwT0UwaTN5bVQwQkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTg0MjIyMDIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI5Nzg5MTU0NjQ1XCJ9Igp9"  // PUT your SESSION_ID 


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
