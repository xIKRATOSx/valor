let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
    const header = `*––––––『 DONATE 』––––––*`
    const footer = `
🇮🇳 ᴅᴏᴍᴇsᴛɪᴄ ᴩᴀʏ :
⮕ ₹ ᴜᴩɪ – dineshvalor@apl
★ sᴄᴀɴ ǫʀ ᴄᴏᴅᴇ ﹠ ᴅᴏɴᴀᴛᴇ ᴠɪᴀ
ᴩᴀʏᴛᴍ, ᴀᴍᴀᴢᴏɴ ᴩᴀʏ , ʙʜɪᴍ, ғʀᴇᴇᴄʜᴀʀɢᴇ, ɢᴩᴀʏ ﹙ɢᴏᴏɢʟᴇ-ᴩᴀʏ﹚, ᴍᴏʙɪᴋᴡɪᴋ, ᴍʏᴊɪᴏ, ᴩʜᴏɴᴇᴩᴇ, ᴇᴛᴄ.

💱 ɪɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ᴩᴀʏ :
⮕ PᴀʏPᴀʟ
★ ᴄʟɪᴄᴋ ᴏɴ ᴩᴀʏᴩᴀʟ ʟɪɴᴋ ᴛᴏ ᴍᴀᴋᴇ ɪɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ᴛʀᴀɴsᴀᴄᴛɪᴏɴ.
`
    const buffer = './media/donate.jpg'
    const button = [
[`ᴏᴋ 👌`, `${usedPrefix}ok`]
]
conn.sendHydrated(m.chat, header, footer.trim(), buffer, 'https://www.paypal.me/DineshValor', 'PᴀʏPᴀʟ', null, null, button, m, {asLocation: true})
}
handler.help = ['donate']
handler.tags = ['Info']
handler.command = /^dona(te|si)$/i

export default handler