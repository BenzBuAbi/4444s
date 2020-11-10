const Discord = require('discord.js');
const fs = require('fs');
let yazı = JSON.parse(fs.readFileSync("./database.json", "utf8"));
exports.run = function(client, message, args) {

  
   let r = message.guild.members.filter(m=>m._roles.length===0)
  
  r.forEach(async function(yetkilikisi){
    
    yetkilikisi.addRole("751162632689680444")
    yetkilikisi.addRole("751162632689680444")
    
  })

  message.channel.send(r.size)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'ver',
  description: '',
  usage: ''
};