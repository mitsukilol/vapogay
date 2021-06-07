const Discord = require("discord.js");
const db = require("quick.db");
const talkedRecently = new Set();

exports.run = async (client, message, params, args) => {
                       if (talkedRecently.has(message.author.id)) {
           return message.reply(":white_flower: **Komutu** `5` **Saniye Aralıklarla Kullanabilirsin.**");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
  const quick = new Discord.MessageEmbed()

 .setAuthor("AggSy Bot", message.guild.iconURL())   
 .setColor(0xF001FA)
 .setDescription(
      `

**▬▬▬▬▬▬[** :beginner: **Yardım Komutları** :beginner: **]▬▬▬▬▬▬**

> **» -yetkili** : Yetkili Komutları Gösterir.
> **» -yetkili2** : Yetkili 2 Komutları Gösterir.
> **» -eğlence** : Eğlence Komutları Gösterir.
> **» -müzik** : Müzik Komutları Gösterir.
> **» -jail-sistemi** : Jail Sistemi Komutları Gösterir.
> **» -kayıt-sistemi** : Kayıt Sistemi Komutları Gösterir.
> **» -logo-sistemi** : Logo Sistemi Komutları Gösterir.
> **» -profil-sistemi** : Kayıt Sistemi Komutları Gösterir.
   
**▬▬▬▬▬▬[** :white_flower: **Bilgilendirme** :white_flower: **]▬▬▬▬▬▬**

> :exclamation: **Fikirleriniz değerlidir, Belirtmekten asla çekinmeyin!**
> :exclamation: **Botun Destek Sunucusuna Gelmek İçin** [Tıkla!](https://discord.gg/ZdxubP2)
> :exclamation: **Komut hakkında detaylı bilgi için:** **-yardım**
 `
    )
    .setTitle(
      `**▬▬▬▬▬▬[** :cyclone: **AggSy Bot** :cyclone: **]▬▬▬▬▬▬** \n ` +
        "\n> :anger: `-istatistik` Botun İstatistiklerine Bakarsınız! \n> :anger: **Prefixim:** `-`",
      ""
    )
    .setImage(
    )
    
    .addField(
      `:gear: **Bağlantılar**`,
      `:shield: [Destek Sunucusu](https://discord.gg/5yQTkNh) • [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=755712467367231548&scope=bot&permissions=8) • [Site-Yakında!]() :shield:`
    )
  
 return message.channel.send(quick);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  aliases: ["y"],
  permLevel: 0
};