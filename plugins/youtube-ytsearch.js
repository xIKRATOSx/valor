import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text, command, usedPrefix }) => {
  if (!text) throw `Type *_"${usedPrefix}${command} <name>"_* to search audio/video.\n\nFor Example:\n${usedPrefix}${command} Bolenath Ji`
  const { video, channel } = await youtubeSearch(text)
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
  m.reply(teks)
}
handler.help = ['ytsearch'].map(v => v + ' <name>')
handler.tags = ['YouTube']
handler.command = /^(yts|ytsearch)$/i

export default handler
