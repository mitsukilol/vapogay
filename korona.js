const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send('```𝘾𝙊𝙍𝙊𝙉𝘼 𝙑𝙄𝙍𝙐𝙎 𝘼𝙉𝙇𝙄𝙆 𝙄𝙎𝙏𝘼𝙏𝙄𝙎𝙏𝙄𝙆 𝙏𝘼𝘽𝙇𝙊𝙎𝙐 𝙆𝙐𝙇𝙇𝘼𝙉𝙄𝙈𝙄```\n\n**Türkiye :flag_tr:**```q!korona TR```\**Çin :flag_cn:**```q!korona CN```\**Amerika :flag_us:**```q!korona US```\**Japonya :flag_jp:**```q!korona JP```\**Fransa :flag_fr:**```q!korona FR```\**Norveç :flag_ne:**```q!korona NE```\**İsveç :flag_se:**```q!korona SN```')
  let a = args[0].toLowerCase()
  .replace('türkiye', 'TR')
  .replace('çin', 'CN')
  .replace('amerika', 'US')
  .replace('japonya', 'JP')
  .replace('fransa', 'FR')
  .replace('norveç', 'NE')
  .replace('isveç',  'SN')
  
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${a}`);
    const body = text.body;
  let ülk = body.countrydata[0].info.title

    let embed = new Discord.MessageEmbed()
    .setColor('#843da4')
    .setTitle('COVID-19')
    .setDescription(`COVID-19 Statistics in **${ülk}**`)
    .setThumbnail('https://www.diken.com.tr/wp-content/uploads/2020/01/corona_reuters-copy.jpg')
    .addField('*:microbe: Toplam Vaka:*',`\`\`〘 → ${body.countrydata[0].total_cases} ← 〙\`\` `, true)
    .addField('*:syringe: Toplam İyileşen:*',`\`\`〘 → ${body.countrydata[0].total_recovered} ← 〙\`\` `, true)
    .addField('*:dna: Toplam Enfekte:*',`\`\`〘 → ${body.countrydata[0].total_active_cases} ← 〙\`\` `, true)
    .addField('*:skull_crossbones: Toplam Ölümler:*',`\`\`〘 → ${body.countrydata[0].total_deaths} ← 〙\`\` `, true)
    .addField('*:test_tube: Bugünki Vakalar:*',`\`\`〘 → ${body.countrydata[0].total_new_cases_today} ← 〙\`\` `, true)
    .addField('*:warning: Bugünki Ölümler:*',`\`\`〘 → ${body.countrydata[0].total_new_deaths_today} ← 〙\`\` `, true)
    .addField('*:bangbang: Ciddi Vakalar:*',`\`\`〘 → ${body.countrydata[0].total_serious_cases} ← 〙\`\` `, true)
    .addField('*:flag_white:  Ülke:*',`\`\`〘 → ${ülk} ← 〙\`\` `, true)
    .addField('*:bust_in_silhouette:   Kullanıcı (sen):*',`\`\`〘 → ${message.author.username} ← 〙\`\` `, true)
    .setTimestamp()
    .setFooter('COVID-19', client.user.avatarURL());
    
    message.channel.send(embed);
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['corona', 'coronabilgi', 'corona-bilgi', 'korona', 'koronabilgi', 'korona-bilgi', 'virüs'],
  permLevel: 0 
};

exports.help = {
  name: 'korona',
  description: 's',
  usage: 's'
};