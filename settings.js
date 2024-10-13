const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==QRMFmWyUnePpHSKJUMXdmcKF3Zqh2c4Y0bUJjZT1UTt42YDFVdyl0TNBTMjs0QZBDa0ZVVpwd=45663091749',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: 'mongodb+srv://hasamg:xlwPPyGX6GedR9xD@cluster0.9qiarq4.mongodb.net/', 
  PREFIX: '.$&',
  LANGUAGE: 'SI',
  PORT: 3000,
  BOT_NAME: '𓄂ʙʟᴀᴄᴋ ᴀʟꜰᴀ࿐ ᴏꜰᴄ ²⁰²⁴᭄',
  OWNER_NAME: 'ᗰᖇ ᗩᒪᖴᗩ',
  OWNER_NUMBER: '94754625969',
  SUDO: '94754625969',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '🖤🔰 © ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ 𓄂ʙʟᴀᴄᴋ ᴀʟꜰᴀ࿐ ᴏꜰᴄ ²⁰²⁴᭄ 🔰🖤',
  STICKER_AUTHOR: '🧑‍🎓 ᴍʀ ᴀʟꜰᴀ 🧑‍🎓',
  STICKER_PACK: '🖤🎗️ 𓄂ʙʟᴀᴄᴋ ᴀʟꜰᴀ࿐ ᴏꜰᴄ ²⁰²⁴᭄ 🎗️🖤',
  REMOVE_BG_APIKEY: 'JZdcMamJae9nAiXKySSKCxkD',
  MAXIMUM_FILESIZE: 500,
  OWNER_R_EMOJI: '👽',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: false,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: false,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: true,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
