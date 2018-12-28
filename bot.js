const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("هنا اي دي الروم")
setInterval(function() {
channel.send(`احبك IRAQMAXYT`);
}, 30)
})

client.login("528307636492435456.JAL8WS5QGxP6LCKAm-JveBew-P4");
