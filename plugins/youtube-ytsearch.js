import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `This command to retrieve audio/video search result from youtube server.
–––––––––––––––––––––––––
⮕ ᴜsᴀɢᴇ:
${usedPrefix + command} <name>

★ ᴇxᴀᴍᴩʟᴇ:
${usedPrefix + command} bolenath ji`
  const { video, channel } = await youtubeSearch(text)
  const header = `*––––『 YT SEARCH 』––––*`
  const buffer = './media/ytsearch.jpg'
  const button = [
      [`ᴏᴋ 👌`, `${usedPrefix}ok`]
      ]
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
🔖 ᴛɪᴛʟᴇ: *${v.title}*
🔗 ᴜʀʟ: ${v.url}
⌛ ᴅᴜʀᴀᴛɪᴏɴ: ${v.durationH}
📡 ᴩᴜʙʟɪsʜᴇᴅ: ${v.publishedTime}
👀️ ᴠɪᴇᴡs: ${v.view}
      `.trim()
      case 'channel': return `
📌 *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} (${v.subscriber}) Subscriber_
🎥 ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  conn.sendButton(m.chat, header, teks, buffer, button, m, {asLocation: true})
}
handler.help = ['ytsearch'].map(v => v + ' <name>')
handler.tags = ['YouTube']
handler.command = /^(yts|ytsearch)$/i

export default handler
