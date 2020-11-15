const Discord = require('discord.js');
const client = new Discord.Client();

console.log(`Starting SMTB!`)
client.once('ready', () => {
	console.log(`SMTB is ready! Logged in as ${client.user.tag}`);
	client.channels.cache.get('762360845577486336').send(`**Bot is online. You can turn these notifications off in the bots app.js file. <@345650591713984513>**`);
    client.user.setPresence({ activity: { name: 'Type >help for help. | Welcome to SMT'}, status: 'dnd' })

});

const { prefix, token } = require('./config.json');
//regular commands and swear filter begin here and status code.
client.on('message', message => {

		     if (message.content === `${prefix}help`) {
            const helpCmd = new Discord.MessageEmbed()
            	.setColor('RED')
            	.setTitle('Commands')
            	.setURL('')
            	.setDescription(`Commands below\n>serverinfo = Shows server information.\n>userinfo = Shows user information\n>modsinfo = Shows mod information using green and red boxes.\n>botinfo = Shows bot information.\n>updatelog = Shows last bot update time`)
            	.setTimestamp()

            message.channel.send(helpCmd);

        } else if (message.content === `${prefix}serverinfo`) {
         const siCmd = new Discord.MessageEmbed()
              .setColor('RED')
              .setTitle(`${message.guild.name} Information`)
              .setDescription(`Server Name : ${message.guild.name}!**\n**Total Members : ${message.guild.memberCount}!**\n**Server Region : ${message.guild.region}**\n**Server Creation Date : ${message.guild.createdAt}`)
              .setTimestamp()

            message.channel.send(siCmd);



        } else if (message.content === `${prefix}userinfo`) {
         const uiCmd = new Discord.MessageEmbed()
        	.setColor('RED')
        	.setTitle(`${message.author.tag} Information`)
        	.setDescription(`**User Account Username and Discriminator: ${message.author.tag}**\n**${message.author.username}'s ID: ${message.author.id}**\n**${message.author.username}'s time of account creation: ${message.author.createdAt}**`)
        	.setTimestamp()

        	message.channel.send(uiCmd)

        } else if (message.content === `${prefix}modsinfo`) {
        const miCmd = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`Mod Information`)
        .setDescription(`Mods:\n\nTARDIM\nAsassins Creed Mod (ACM)\n\nTARDIM Progress: 🟩🟩🟩🟩🟩🟥\n*----------*\nACM Progress: 🟥🟥🟥🟥🟥🟥`)
        .setTimestamp()

        message.channel.send(miCmd)

        } else if (message.content === `${prefix}botinfo`) {
               const biCmd = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle(`SMT Bot Information`)
                    .setDescription(`SMT is currently being coded by Atomical in the language known as JavaScript and discord.js. This bots current features are :\nAuto-Mod (removing forbidden words.)\nProvides server/user/bot/mods information. (see >help).`)
                    .setTimestamp()

                    message.channel.send(biCmd)

        } else if (message.content === `${prefix}updatelog`) {
        const ulCmd = new Discord.MessageEmbed()
               .setColor('BLUE')
               .setTitle(`Last Bot Update`)
               .setDescription(`Sat 11:36 GMT 31/10/2020 <:pumpkin:772061093265670214>`)
               .setTimestamp()
                message.channel.send(ulCmd)


// swear filter part and regular commands end
        } else if (message.content === `Fuck`) {
           message.delete({ timeout: 50 })
            message.channel.send(`Please do not continue to break rules or use words that are disallowed. You can read the rules in <#734174100557266956>`);

        } else if (message.content === `Cunt`) {
           message.delete({ timeout: 50 })
            message.channel.send(`Please do not continue to break rules or use words that are disallowed. You can read the rules in <#734174100557266956>`);

        } else if (message.content === `Nigga`) {
           message.delete({ timeout: 50 })
            message.channel.send(`Please do not use racist words within our Discord! Do it again and you will receive a ban.`);

        } else if (message.content === `fuck`) {
           message.delete({ timeout: 50 })
            message.channel.send(`Please do not continue to break rules or use words that are disallowed. You can read the rules in <#734174100557266956>`);

        } else if (message.content === `cunt`) {
           message.delete({ timeout: 50 })
            message.channel.send(`Please do not continue to break rules or use words that are disallowed. You can read the rules in <#734174100557266956>`);

         } else if (message.content === `nigga`) {
           message.delete({ timeout: 50 })
            message.channel.send(`Please do not use racist words within our Discord! Do it again and you will receive a ban.`);

          } else if (message.content === `emm`) {
          message.delete({ timeout: 50 })
          message.author.send(`No emm.`);

          } else if (message.content === `Emm`) {
          message.delete({ timeout: 50 })
          message.author.send(`No emm.`);

          } else if (message.content === `EMM`) {
           message.delete({ timeout: 50 })
           message.author.send(`No emm, and watch your caps.`);

          } else if (message.content === `eMm`) {
           message.delete({ timeout: 50 })
           message.author.send(`No emm.`);

           } else if (message.content === `emM`) {
           message.delete({ timeout: 50 })
           message.author.send(`No emm.`);



     //swear filter ends here, custom commands start here.

        } else if (message.content === `${prefix}zoe`) {
            message.channel.send(`Zoe is the best lesbo. Dont @ her..`);

        } else if (message.content === `${prefix}atomical`) {
            message.channel.send(`Atomical will slaughter you if she finds out you did this command!`);

} else if (message.content === `${prefix}botcode`) {
const botcodeEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Example Bot Code')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Example Bot Code')
	.setDescription('Code below has status stuff in it and stuff. Enjoy.\ne')
	.setThumbnail('https://cdn.discordapp.com/attachments/762360845577486336/762751276235882506/Screenshot_2020-10-05_at_20.01.05.png')
	.setImage('https://cdn.discordapp.com/attachments/762360845577486336/762751276235882506/Screenshot_2020-10-05_at_20.01.05.png')
	.setTimestamp()

message.channel.send(botcodeEmbed);



     //custom commands end here. the welcome code which is disabled and isnt here rn starts here, and so does dm code.

      } else if (message.channel.type == "dm") {
        message.author.send(`Go away. I'm not made for use in direct messages.`);
        return;
      }
    });

client.login(token);
