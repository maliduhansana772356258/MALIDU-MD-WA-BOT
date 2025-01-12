const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🧸𝗠𝗔𝗟𝗨𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔-𝐌𝐃🧸*

> *𝙊𝙒𝙉𝙀𝙍* 

*🔮 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: Malidu Hansana*
*🔮 ɴᴜᴍʙᴇʀ* -: 94772356258

*© Mαʅιԃυ Hαɳʂαɳα Bσƚッ💕*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7e1f9a45d326abc34d161.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
