const Discord = require("discord.js");
const Util = require("../util/Util.js");

module.exports.run = async (bot, message, args) => {
  //

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      ":diamond_shape_with_a_dot_inside: **Bu komutu kullanmak için Mesajları Yönet yetkisine sahip olmalısın.**"
    );
  if (!args[0])
    return message.reply(
      ":red_circle: **En Az** `1 - 100` **Arasında Bir Tam Sayı Değeri Girmelisiniz.**"
    );
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`:black_small_square: **${args[0]}** **Adet Mesaj Silindi.**`)
  });
};

module.exports.help = {
  name: "sil"
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sil",
  description: "",
  usage: ""
}; 
