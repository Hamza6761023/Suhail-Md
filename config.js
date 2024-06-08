const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID =SUHAIL_03_11_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg0LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRJS2JsRXc3aXNBUGkxTTBrUnoyTFdmWk9oeEp1SzJnODdSclJXN0dVRUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDI5ODA4MTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRDQ5OTE5OERFRkMzN0FDNUNEMkZBMDIzNjAzOEYyMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc4MTYzMTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibEt0WlQtZllUV2lvcUtmQ2VISFVkUVwiLFxuICBcInBob25lSWRcIjogXCIwOGJiODlkZS0xYWI3LTQ1ZTktYjYyMy1mZjY3NjVhMTQ5MWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUxLFxuICAgICAgNyxcbiAgICAgIDEyLFxuICAgICAgMSxcbiAgICAgIDEwNyxcbiAgICAgIDEyNyxcbiAgICAgIDIwOCxcbiAgICAgIDE0NyxcbiAgICAgIDExNSxcbiAgICAgIDIyMyxcbiAgICAgIDE0LFxuICAgICAgODUsXG4gICAgICAyMSxcbiAgICAgIDE1NyxcbiAgICAgIDEyOCxcbiAgICAgIDI0MyxcbiAgICAgIDcwLFxuICAgICAgMTQyLFxuICAgICAgODYsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICA1OCxcbiAgICAgIDE4MCxcbiAgICAgIDQzLFxuICAgICAgNSxcbiAgICAgIDg1LFxuICAgICAgMTcxLFxuICAgICAgMjAzLFxuICAgICAgMjA1LFxuICAgICAgMTIzLFxuICAgICAgMTE2LFxuICAgICAgMjA2LFxuICAgICAgMTA4LFxuICAgICAgMzksXG4gICAgICAyMjQsXG4gICAgICAxMzAsXG4gICAgICAyMCxcbiAgICAgIDIwOSxcbiAgICAgIDk2LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0NNNEI2QVBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAyOTgwODE4OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NzQ0Njg1NjA4MTYwODo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmbDwnZm78J2ZuCDwnZm38J2ZsPCdmbzwnZqJ8J2ZsFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2ZjEvMEdFUEdYajdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0lYU005aXpCbmN0RWhvZERIZnhFMDg0UGZMMDRSa3diVFJhZVNvMlNqZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXakRYVnBUaGNCZG53Q1ZHVnJ2SmJ5Qk1mT08wd21rMmhWOTJaVlVkS0FNcDYzeTBsNDlFeGR4MDRZRUZmZ2k0MlBuQWhaQVdIU2Y2b0piamJCTytDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxVjRES2dpSDh4bkNLQVBMLzBobjdYZmxWeXhDUHJHa0c5b1A4aG8xS2VueHlnNHQyVTJ1eDk2YzdXdWE1OU5UZ0paYmtqczFSMVdyNEFaN3BtcE9EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjk4MDgxODk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4MTYzMDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCaGZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJoZi5qc29uIjogIntcImtleURhdGFcIjpcIjhDS20zNTJ2V1A5OWVERmF1dXhYb3YxRDJweWZLWnc0alNLMjYwUzNmcTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3NDE4NjIzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3ODE2MzEyMDE3XCJ9Igp9 process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
