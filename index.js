const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjEzMDQzNTI0MTc4NDExNTIy.XXlZRQ.Bd04b6Q4pZWOsZ2cajR_VghgdhA';

const PREFIX = '~';

bot.on('ready', () => {
    console.log('BotOnline!');
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "phòng-khách");
    if(!channel) return;

    channel.send(`Chào mừng bạn ${member} đã đến với **Hầm nhà Khánh**.`)

});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.reply('Ping cái địt mẹ mày!');
            break;

        case 'kick':
            if (!message.member.roles.find(r => r.name === "Big Peen Club")) return message.channel.send('Quyền đâu ra mà kick thế?')
                .then(msg => msg.delete(5000));

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('Bay màu nhé, BYEEEEE.').then(() => {
                        message.reply(`Cho cháu ${user.tag}ra đảo.`);
                    }).catch(err => {
                        message.reply('Mày tính kick cán bộ đấy à?');
                        console.log(err);
                    });
                } else {
                    message.reply("?")
                }
            } else {
                message.reply('Tag người bạn cần kick!')
            }

            break;
    }

});

bot.login(token);