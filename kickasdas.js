const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin : `Üyeleri At`')
     if(!message.guild.members.cache.get(client.user.id).hasPermission('KICK_MEMBERS')) return message.channel.send('Bu komutu uygulayabilmem için gerekli yetkiye sahip değilim : `Üyeleri At`')

    let user = message.mentions.users.first()
     if(!user) return message.channel.send(':exclamation: ``Bir kişi etiketlemediğin için işlem iptal edildi.``')
   if (!message.guild.member(user).kickable) return message.channel.send(':exclamation: ``Bu kişi benden yüksek veya kick yetkisine sahip :x:``')
    if(user.id === message.author.id) return message.channel.send(':exclamation: ``Kendini sunucudan atamazsın.``')
        if(user.id === client.user.id) return message.channel.send(':exclamation: ``Botu sunucudan atamazsın.``')

    message.channel.send(`<@${user.id}> Kişisini sunucudan atmak istediğine eminmisin ? \n\n**İşlemi Yapmak İçin** :white_check_mark: \n**İptal Etmek İçin** :x:`).then(async m => {
        await m.react('✅').then(r => {
            let userr = message.author
            let onay = (reaction, userr) => reaction.emoji.name === '✅' && userr.id === message.author.id
            let onay2 = m.createReactionCollector(onay)
//DevTR
            onay2.on('collect', async (r) => {
                message.guild.members.cache.get(user).kick()
                m.reactions.removeAll()
                m.edit(':white_check_mark: ``Kişi AggSy Bot Sayesinde Sunucudan Uzaklaştırıldı``')
                user.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`${message.guild.name} Sunucusundan ${message.author.username} Tarafından atıldın.`))
            })
        })
        await m.react('❌').then(r => {
            let userr = message.author
            let onay = (reaction, userr) => reaction.emoji.name === '❌' && userr.id === message.author.id;
            let onay2 = m.createReactionCollector(onay)
            onay2.on('collect', async (r) => {
              m.reactions.removeAll()
              m.edit(':white_check_mark: ``Kickleme İşlemi Başarıyla İptal Edildi.``')
            })
        })
    })


}

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permlevel: 0
}

exports.help = {
	name: "kickadasdasda45"
}