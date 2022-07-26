function handler(m) {
  const data = global.prems.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['premiums']
handler.tags = ['Info']

handler.command = /^(premiums|prems)$/i

export default handler
