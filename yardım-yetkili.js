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
.addField('**:white_check_mark: Yetkili Komutları :white_check_mark:**',`
**\n:white_small_square: ban-log** : Ban Log Ayarlar
**:white_small_square: ban-yetkili-rol** : Ban Atacak Yetkiliyi Ayarlar
**:white_small_square: ban** : Ban Atar
**:white_small_square: unban** : Kişinin Banını Kaldırır
**:white_small_square: capsengel** : CapsLock Engeller
**:white_small_square: istek-kanal** : İstek Sistemini Aktif Edersiniz
**:white_small_square: kick** : Kick Atar
**:white_small_square: uyarı** : Uyarı Sistemini Gösterir
**:white_small_square: sil** : Sohbeti Temizler
**:white_small_square: sa-as** : Sa-As Sistemini Açar/Kapatır
**:white_small_square: ototag** : Ototagı Aktif Eder
**:white_small_square: temizle-üye** : Kişinin Mesajlarını Siler
**:white_small_square: ototagkapat** : Ototagı Deaktif EDer
**:white_small_square: otorol** : Otorol Sistemini Aktif Eder`)
.setFooter("Sayfa 1/2 Diğer Sayfaya Geçmek İçin -yetkili2")
       
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
  name: 'yetkili',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   