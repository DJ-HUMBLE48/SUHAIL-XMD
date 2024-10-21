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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_45_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg5LFxuICAgICAgICA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyLFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDM5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJodlh6R0dOUTRxRkpVSUEzbjh0K1BOL1dVZkhidERQemphN2IyUzFIWU9zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzU0NDkzNzkwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUY3MzEzM0Q4QUFBN0VEMEY1QzVCNkZGMDY0OTAzNUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NDc4NzI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdGQ3BZVFZWVHF1SU9qOWMyVExGMVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDEzY2FlNzMtNGQ5OC00MmIwLTlmZjAtMzdhNTEyZGY3MmU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDksXG4gICAgICAyNDksXG4gICAgICAxNzEsXG4gICAgICA1LFxuICAgICAgMjIsXG4gICAgICA1NixcbiAgICAgIDIwLFxuICAgICAgMTk3LFxuICAgICAgMTg5LFxuICAgICAgMTA4LFxuICAgICAgMjA3LFxuICAgICAgNTQsXG4gICAgICAxNDUsXG4gICAgICAxNDgsXG4gICAgICAxNDYsXG4gICAgICAxNTUsXG4gICAgICAxMjYsXG4gICAgICAxOTAsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICAxNTksXG4gICAgICAxOTMsXG4gICAgICAyNDMsXG4gICAgICAxOTgsXG4gICAgICAyNDAsXG4gICAgICA0MSxcbiAgICAgIDU1LFxuICAgICAgMjMzLFxuICAgICAgMjExLFxuICAgICAgMTU2LFxuICAgICAgMjAyLFxuICAgICAgMTI1LFxuICAgICAgNjQsXG4gICAgICA4MixcbiAgICAgIDEyNyxcbiAgICAgIDE1MSxcbiAgICAgIDExMixcbiAgICAgIDU3LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhTTkc1Tk1aXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NDQ5Mzc5MDI6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQyNjI4MDAzNDU1MTAxOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tiZXMrSUVFTHVBMTdnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVkpCOVNQNW1CVHZFc052aWVSTEk2N1BLVlNhM2sxaHl3eEU3SzZ6cDFHST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyazAzZXk2RGV0N0ZzUnVWeFBUWFFkNEZweThzZFJ2N01wR3hyUGpjSTc0QzFYZlk2eDdSQ1hPN2pNQVhoeXdVWGx5SzBMOW05bCtyVUp0VUZoWlZDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFS1NnaUVGZE5oakFmMnhRMHNDc3RZNmlncDB4UXh5Y2ZHRnN3VHBTeGlpTUU5UHpQMHdUQ3U2eDlkd2tqbWxCejZISTc4RUhHallNTit4WHVMZVVBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NDQ5Mzc5MDI6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTQ3ODcyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF5a1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXlrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMDNIeW82RjVMM1kveFBrNlI2Z1JvSHEyQ1kxN1VCVEJYbDJ1ZUVYWlRqOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjgwMTEwMzcxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI5MzI1OTM4MDIzXCJ9Igp9"  // PUT your SESSION_ID 


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
