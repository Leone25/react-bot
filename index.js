const config = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });


client.on('messageReactionAdd', async (reaction, user) => {
    
    let serverData;

    config.reactions.forEach((el)=>{
        if (el.messageId == reaction.message.id && el.emojiId == reaction.emoji.id) {
            serverData = el;
        }
    });

    if (serverData == undefined) return;
    
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    reaction.message.guild.members.fetch(user)
        .then((member) => 
        {
            member.roles.add(serverData.roleId);
        });
});

client.on('messageReactionRemove', async (reaction, user) => {
    
    let serverData;

    config.reactions.forEach((el)=>{
        if (el.messageId == reaction.message.id && el.emojiId == reaction.emoji.id) {
            serverData = el;
        }
    });

    if (serverData == undefined) return;
    
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    reaction.message.guild.members.fetch(user)
        .then((member) => 
        {
            member.roles.remove(serverData.roleId);
        });
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(config.activity);
});

client.login(config.token);