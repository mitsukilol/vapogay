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

          talkedRecently.delete(message.author.id);
        }, 5000);
    }
    const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
.addField('**:white_check_mark: Kayıt Komutları :white_check_mark:**',`
**\n:white_small_square: kayıt-alınacak-rol** : Kayıt Olduktan Sonra Alınacak Rol
**:white_small_square: kayıt-verilecek-rol** : Kayıt Olduktan Sonra Verilecek Rol
**:white_small_square: kayıt-log-ayarla** : Kayıt Log Kanalını Belirlersiniz
**:white_small_square: isim-sistemi** : İsim Sistemini Ayarlarsınız
**:white_small_square: kayıt-kanal** : Kayıt Kanalını Ayarlarsınız
**:white_small_square: kayıt-ol** : Kayıt Olursunuz
**:white_small_square: kayıt-kapat** : Kayıt Sistemini Kapatırsınız`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.addField("**➥ Linkler**", "[:white_check_mark: Davet Linki](https://discord.com/oauth2/authorize?client_id=755712467367231548&scope=bot&permissions=8)\n[:white_check_mark: Destek Sunucu](https://discord.gg/ZdxubP2)\n[:white_check_mark: Website](https://img.freepik.com/free-photo/coming-soon-neon-sign-dark-background-3d-rendering_35913-1058.jpg?size=626&ext=jpg)")

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   