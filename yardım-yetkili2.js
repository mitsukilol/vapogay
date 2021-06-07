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
.addField('**:blue_circle: Yetkili Komutları :blue_circle:**',`
**\n:white_small_square: kanal-koruma aç/kapat** : Kanal Korumayı Açarsınız.
**:white_small_square: duyuru-kanal-ayarla** : Duyuru Kanalını Belirtirsiniz.
**:white_small_square: duyuru** : Duyuru Atarsınız.
**:white_small_square: kick-log** : Kick Log Ayarlar
**:white_small_square: kick-yetkili-rol** : Kick Atacak Yetkiliyi Ayarlar
**:white_small_square: kick** : Kişiyi Sunucudan Uzaklaştırırsınız.
**:white_small_square: yavaş-mod** : Yavaş Modu Açarsınız`)
.setFooter("Sayfa 2/2 Önceki Sayfaya Geçmek İçin -yetkili")
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
  name: 'yetkili2',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   