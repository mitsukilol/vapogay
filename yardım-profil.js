const Discord = require('discord.js');
const talkedRecently = new Set();
let botid = ('755712467367231548')

exports.run = (client, message, args) => {
                         if (talkedRecently.has(message.author.id)) {
           return message.reply("``Komutu 5 Saniye Aralıklarla Kullanabilirsin.``");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
    const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
.addField('**:white_check_mark: Profil Komutları :white_check_mark:**',`
**\n:white_small_square: bayrakayarla** : İstediğiniz Bayrağı Ayarlarsınız!
**:white_small_square: cinsiyetayarla** : Cinsiyet Seçersiniz!
**:white_small_square: isimayarla** : İsminizi Ayarlarsınız!
**:white_small_square: soyisimayarla** : Soyisminizi Ayarlarsınız
**:white_small_square: yaşayarla** : Yaşınızı Ayarlarsınız
**:white_small_square: profilim** : Profilinizi Görüntülersiniz!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.addField("**➥ Linkler**", "[:white_check_mark: Davet Linki](https://discord.com/oauth2/authorize?client_id=755712467367231548&scope=bot&permissions=8)\n[:white_check_mark: Destek Sunucu](https://discord.gg/5yQTkNh)\n[:white_check_mark: Website](https://img.freepik.com/free-photo/coming-soon-neon-sign-dark-background-3d-rendering_35913-1058.jpg?size=626&ext=jpg)")
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'profil-sistemi',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   