const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="craftybear3444@gmail.com"
global.location="Manipur,India."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Vincenzo678:fd92Tge5NXFS@cluster678.wgo9xx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster678"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Vincenzo¹²³" 


global.devs = "9169009297247" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916909297247";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "True"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "True"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "True";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,916xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,916xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "916909297247,916xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_01_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOaUVWVzlNRi9WZzlCZ3pTWXF3dVZuS2xEaGFqU1g1VHpwY1ZOQU5Lb25jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwd3NyQ2YwalJWQ0FkRUF5LUl0RS1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEyNTdmMzk4LWViNDktNDIwZi1hYjU5LWZkYjcxNGY2NmUyOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAyMDcsXG4gICAgICA5NyxcbiAgICAgIDE3MyxcbiAgICAgIDE2NCxcbiAgICAgIDEwNCxcbiAgICAgIDEzNixcbiAgICAgIDE4OSxcbiAgICAgIDI0NCxcbiAgICAgIDI1LFxuICAgICAgMjI2LFxuICAgICAgNzYsXG4gICAgICAxNjksXG4gICAgICA4MixcbiAgICAgIDEyLFxuICAgICAgMzAsXG4gICAgICAyNTQsXG4gICAgICAxMjUsXG4gICAgICA2OCxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMTIwLFxuICAgICAgNzUsXG4gICAgICA3OCxcbiAgICAgIDE0MSxcbiAgICAgIDY0LFxuICAgICAgMTA5LFxuICAgICAgMTg3LFxuICAgICAgOTMsXG4gICAgICA5MixcbiAgICAgIDIxNyxcbiAgICAgIDEyMSxcbiAgICAgIDE4MSxcbiAgICAgIDE2OCxcbiAgICAgIDQ1LFxuICAgICAgMTc3LFxuICAgICAgMTgwLFxuICAgICAgOTQsXG4gICAgICAyMSxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktTU0REOFFTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTY5MDkyOTcyNDc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2MDU2NTQ3NDM4NjY1OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjJodTdjRUVJWFJpclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxWW1yVVJBcW1EZFRDVVN2VmNqSTV2cG84U2dvWkV4OXZORzg2Q2RnMTFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklIVnRmM2k2SXpoaGp5OHBRZHNkOVlxYzQ1NklsSjNwQnA3Q3hsRm51OHVJVEZtdHNsL2Y1VHhJdnFUUlF2N25nMlpja3dpQUFkOVY2MTNkUUFtQ0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlE5aHd2S1p6UG90VG8wMS9Pd3JrWFVpckRIemU4aHZrMHN4T1kwQUdRYWNLS0I4TDZOY1ZVYU5iRFgxS1o0UWZkRVlWNEpqdk83a094WU50VzI5cWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjkwOTI5NzI0Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODM4ODU2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Vincenzo Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Vincenzo 』```", //*『sᴜʙsᴄʀɪʙᴇ • craftastic land』*\n youtube.com/@CraftasticLand"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Vincenzo",
  ownername:process.env.OWNER_NAME|| "Vince",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Vincenzo"  ).toUpperCase(),



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
