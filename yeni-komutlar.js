const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor(0xF001FA)
  .setDescription(`[:trident: **AggSy Bot Sizler Sayesinde Gelişiyor.** :trident:]`)
  .addField(`**:game_die: İşte Karşınızda Yenilikler :game_die:**\n`,
`:green_circle: \`-tavsiye\` = **Bize Tavsiye Vermek İsteyebilirsiniz.**
:green_circle: \`-müzik\` = **Müzik Dinlemek İsterseniz.(BAKIMDA!)**
:green_circle: \`-logo-sistemi\` = **Logo Oluşturmak İçin**
:green_circle: \`-jail-sistemi\` = **Birilerini Cezalandırmak İçin.**`)
.addField("**➥ Linkler**", "[:radio_button: Davet Linki](https://discord.com/oauth2/authorize?client_id=755712467367231548&scope=bot&permissions=805314622)\n[:radio_button: Destek Sunucu](https://discord.gg/ZdxubP2)\n[:radio_button: Website](https://img.freepik.com/free-photo/coming-soon-neon-sign-dark-background-3d-rendering_35913-1058.jpg?size=626&ext=jpg)")
    .setFooter(`${message.author.username} Bizim İçin Bir Yıldızsın.`, message.author.avatarURL())
  return message.channel.send(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}