function handler(m) {
  const data = global.mods.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['moderators']
handler.tags = ['Info']

handler.command = /^(moderators|mods)$/i

export default handler
