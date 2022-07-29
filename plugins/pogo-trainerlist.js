let handler = async (m, { conn, usedPrefix, command }) => {
conn.sendButton(m.chat, `*––––『 TRAINER LIST 』––––*`, `
*Pokémon Go: Trainer Code [Delhi NCR] List*

Enter Trainer Code Here:
https://bit.ly/Pokemon_Go_Trainer_Code_Delhi_NCR_Form

View Trainer List Here: (Access Required)
https://bit.ly/Pokemon_Go_Trainer_Code_Delhi_NCR_List

*_FAQ:_*
*Q.* _Why restriction necessary?_
*=>* _To secure our data from unauthorised access and prevent from misuse. It's also help to keep data in safe hand._

===========================
`.trim(), `./media/trainerlist.jpg`, [
[`ᴏᴋ 👌`, `${usedPrefix}ok`]
], m, {asLocation: true})
}
handler.help = ['trainerlist']
handler.tags = ['Pokémon Go']
handler.command = /^(trainerlist|tl|trainercode|tc)$/i

export default handler