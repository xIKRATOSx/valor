import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `This command to retrieve audio/video from youtube server.
–––––––––––––––––––––––––
⮕ ᴜsᴀɢᴇ:
${usedPrefix + command} <name/url>

★ ᴇxᴀᴍᴩʟᴇ:
${usedPrefix + command} bolenath ji`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Not found'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  const header = `*–––––––『 YT PLAY 』–––––––*`
  const footer = `
🔖 ᴛɪᴛʟᴇ: ${title}
📃 ᴅᴇsᴄʀɪᴩᴛɪᴏɴ: ${description}
📡 ᴩᴜʙʟɪsʜᴇᴅ: ${publishedTime}
⌛ ᴅᴜʀᴀᴛɪᴏɴ: ${durationH}
👀️ ᴠɪᴇᴡs: ${viewH}
`
  const button = [
    ['ᴀᴜᴅɪᴏ 🎧', `${usedPrefix}yta ${url} yes`],
    ['ᴠɪᴅᴇᴏ 🎥', `${usedPrefix}ytv ${url} yes`],
    ['ʏᴏᴜᴛᴜʙᴇ sᴇᴀʀᴄʜ 🔎', `${usedPrefix}yts ${url}`]
  ]
  await conn.sendHydrated(m.chat, header, footer.trim(), thumbnail, url, '📺Go To Youtube!', null, null, button, m)
}
handler.help = ['play'].map(v => v + ' <name/url>')
handler.tags = ['YouTube']
handler.command = /^(play)$/i

handler.exp = 0
handler.limit = false

export default handler

