import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Type ".play <name>" to download audio/video.\n\nFor Example:\n${usedPrefix}${command} Bolenath Ji`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Not found'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `*–––––––『 PLAY 』–––––––*`, `
🔖 ᴛɪᴛʟᴇ: ${title}
📃 ᴅᴇsᴄʀɪᴩᴛɪᴏɴ: ${description}
📡 ᴩᴜʙʟɪsʜᴇᴅ: ${publishedTime}
⌛ ᴅᴜʀᴀᴛɪᴏɴ: ${durationH}
👀️ ᴠɪᴇᴡs: ${viewH}
  `.trim(), thumbnail, url, '📺Go To Youtube!', null, null, [
    ['ᴀᴜᴅɪᴏ 🎧', `${usedPrefix}yta ${url} yes`],
    ['ᴠɪᴅᴇᴏ 🎥', `${usedPrefix}ytv ${url} yes`],
    ['ʏᴏᴜᴛᴜʙᴇ sᴇᴀʀᴄʜ 🔎', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler

