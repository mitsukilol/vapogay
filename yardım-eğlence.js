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
.addField('**:white_check_mark: Eğlence Komutları :white_check_mark:**',`
**\n:white_small_square: aşkölçer** : Kişiyle Aşkınızı Ölçer!
**:white_small_square: balıktut** : Balık Tutarsınız!
**:white_small_square: dans** : Yazdığınız Kelimeyi Dans Biçiminde Yazar!
**:white_small_square: korkut** : Kişiyi Korkutursunuz!
**:white_small_square: adamasmaca** : Adam Asmaca Oynarsınız!
**:white_small_square: düello** : Kişiyle Düello Yaparsınız!
**:white_small_square: yazan-kazanır** : Kelimeyi İlk Yazan Kazanır!
**:white_small_square: slots** : Slot Oyunu Oynarsınız!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.addField("**➥ Linkler**", "[:white_check_mark: Davet Linki](https://discord.com/oauth2/authorize?client_id=755712467367231548&scope=bot&permissions=8)\n[:white_check_mark: Destek Sunucu](https://discord.gg/ZdxubP2)\n[:white_check_mark: Website](https://img.freepik.com/free-photo/coming-soon-neon-sign-dark-background-3d-rendering_35913-1058.jpg?size=626&ext=jpg)")

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence"],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   