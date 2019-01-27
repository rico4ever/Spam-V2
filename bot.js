const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("539165170434310171")
setInterval(function() {
channel.send(`بوت سبام كريديت ايزي سهل بيرفكتوو`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
