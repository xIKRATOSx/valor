
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import db from '../lib/database.js'

let limit = 80
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
  if (!args || !args[0]) throw `Type "${usedPrefix}${command} <url>" to download audio.\n\nFor Example:\n${usedPrefix}${command} https://youtu.be/iHdYhdDg1Co`
  let chat = db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let audio, source, res, link, lastError, isLimit
  for (let i in _audio) {
    try {
      audio = _audio[i]
      isLimit = limitedSize < audio.fileSize
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Please input valid url/link.\n\n' + (lastError || `For Example:\n${usedPrefix}${command} https://youtu.be/iHdYhdDg1Co`)
  if (!isLimit) await conn.sendFile(m.chat, source, title + '.mp3', `
🔖 ᴛɪᴛʟᴇ: ${title}
📁 ғɪʟᴇ sɪᴢᴇ: ${audio.fileSizeH}
`.trim(), m, null, {
    asDocument: chat.useDocument
  })
}
handler.help = ['yta'].map(v => v + ` <url>`)
handler.tags = ['DOWNLOADER']
handler.command = /^(yta|ytaudio|ytmp3)$/i

handler.exp = 0

export default handler

