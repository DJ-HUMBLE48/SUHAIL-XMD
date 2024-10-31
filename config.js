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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_01_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTExLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJYXZKems3ejc0TlJoWit4VHBNRFFnNTNUOWJKN0JpTTdpSHFpUmU1cUtnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwT3lMSUJPY1RveWF4MjgxNGdLWVJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjYzhjNzI2LTBjNjAtNGU0OS05OGZmLTE5YzZlZjdhNmZiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxNjMsXG4gICAgICAxNzUsXG4gICAgICAxMDQsXG4gICAgICAxNDksXG4gICAgICAxOTAsXG4gICAgICAxMjUsXG4gICAgICAxODIsXG4gICAgICA3LFxuICAgICAgMTAxLFxuICAgICAgMTgwLFxuICAgICAgOTMsXG4gICAgICAxMDcsXG4gICAgICAxNzYsXG4gICAgICAxMSxcbiAgICAgIDE4NyxcbiAgICAgIDY0LFxuICAgICAgNTEsXG4gICAgICAyMjAsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMjAsXG4gICAgICAyMTIsXG4gICAgICAxNTYsXG4gICAgICAxMTksXG4gICAgICAyMjQsXG4gICAgICAxNTQsXG4gICAgICAxODksXG4gICAgICAxNzAsXG4gICAgICAxMzgsXG4gICAgICAxODQsXG4gICAgICA3LFxuICAgICAgMzgsXG4gICAgICAxOSxcbiAgICAgIDIxLFxuICAgICAgODMsXG4gICAgICAxMTEsXG4gICAgICAxNTgsXG4gICAgICAyMTksXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0NYNjE1RktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU0MzQ0MzgwMjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmL/wnZmFIPCdmYPwnZmq8J2ZovCdmZfwnZmh8J2ZmjQ4XCIsXG4gICAgXCJsaWRcIjogXCI3NTA1MDQwOTUyOTQ1NToxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZVNxTlVERU4yT2pia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIll5TCsvNEt2elp4dTZLTVVNc3ltY2MzZ2M3VjB6anVORlB0TjZ4UGVHMnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSnY4dUg4RkpMa1I1WHlDeWZWREx2Ym0zRFliNzNpTGZZVkxsMnpYTlVGWVFxSHdjZi9RcFIwVEp6ZlpHUmsyLzFmaXhIa1N1Vk5KSmdnVFNMY0JqQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSDRQanZOUk1aOHFtTDBXSjgvMGpwRU82b0RST045V1NyM2hBa0IvbkEzemg0a25DTGlXdUxMNkdaakNvNTNvM2sxYjdxaVd6Ylp5NnZYTHNoNHlNZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQzNDQzODAyOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMzY1MjgxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXJsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNcmwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWOFowZ25zNE92NXdRQXVQbC9GZ0trb2w3UXgyY0M4c3lNZXBqSVIyZEx3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk4NDIyMjAyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwMzEyOTIwNTMxXCJ9Igp9"  // PUT your SESSION_ID 


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
