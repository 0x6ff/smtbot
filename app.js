const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('SMTB is ready! Shake a leg with >');
});

const { prefix, token } = require('./config.json');
//regular commands and swear filter begin here.
client.on('message', message => {

			if (message.content === `${prefix}help`) {
        	message.channel.send(`**Regular Commands**\n\n**>serverinfo** [Displays Server Information]\n**>userinfo** [Displays User Information]\n**>botinfo** [Displays Bot Information]\n**>modsinfo**[Displays SMT mods info.]\n\n*Custom Commands*\n\n**>zoe**\n**>digitali**`);

        } else if (message.content === `${prefix}serverinfo`) {
        	message.channel.send(`**Server Name : ${message.guild.name}!**\n**Total Members : ${message.guild.memberCount}!**\n**Server Region : ${message.guild.region}**\n**Server Creation Date : ${message.guild.createdAt}**`);

        } else if (message.content === `${prefix}userinfo`) {
            message.channel.send(`**User Account Username and Discriminator: ${message.author.tag}**\n**${message.author.username}'s ID: ${message.author.id}**\n**${message.author.username}'s time of account creation: ${message.author.createdAt}**\n**${message.author.username}'s Avatar URL : ${message.author.avatarURL}**\n**${message.author.username}'s **`);

        } else if (message.content === `${prefix}modsinfo`) {
            message.channel.send(`null`);

        } else if (message.content === `${prefix}botinfo`) {
            message.channel.send(`**SMT Bot is coded by Digitali. It will auto-mod, provide server information, etc. You can add this bot to your own server, as long as you dont claim it as your own.**`);

        } else if (message.content === `${prefix}modinfo`) {
            message.channel.send(`Mod is currently around `)
// swear filter part and regular commands end
        } else if (message.content === `Fuck`) {
        var role = message.guild.roles.find("name", "Warning 1");
           message.member.addRole(role);
           message.delete(`Fuck`)
            message.channel.send(`Please do not continue to break rules or use words that are disallowed. You can read the rules in <#734174100557266956>`);

        } else if (message.content === `Cunt`) {
         var role = message.guild.roles.find("name", "Warning 1");
           message.member.addRole(role);
           message.delete(`Cunt`)
            message.channel.send(`Please do not continue to break rules or use words that are disallowed. You can read the rules in <#734174100557266956>`);

        } else if (message.content === `Nigga`) {
         var role = message.guild.roles.find("name", "N-Word Warning");
           message.member.addRole(role);
           message.delete(`Nigga`)
            message.channel.send(`Please do not use racist words within our Discord! Do it again and you will receive a ban.`);

        } else if (message.content === `fuck`) {
         var role = message.guild.roles.find("name", "Warning 1");
           message.member.addRole(role);
           message.delete(`fuck`)
            message.channel.send(`Please do not continue to break rules or use words that are disallowed. You can read the rules in <#734174100557266956>`);

        } else if (message.content === `cunt`) {
         var role = message.guild.roles.find("name", "Warning 1");
           message.member.addRole(role);
           message.delete(`cunt`)
            message.channel.send(`Please do not continue to break rules or use words that are disallowed. You can read the rules in <#734174100557266956>`);

         } else if (message.content === `nigga`) {
         var role = message.guild.roles.find("name", "N-Word Warning");
           message.member.addRole(role);
           message.delete(`nigga`)
            message.channel.send(`Please do not use racist words within our Discord! Do it again and you will receive a ban.`);

          } else if (message.content === `emm`) {
          message.delete(`emm`)
          message.author.send(`No emm.`);

          } else if (message.content === `Emm`) {
          message.delete(`Emm`)
          message.author.send(`No emm.`);

          } else if (message.content === `EMM`) {
           message.delete(`EMM`)
           message.author.send(`No emm, and watch your caps.`);

          } else if (message.content === `eMm`) {
           message.delete(`eMm`)
           message.author.send(`No emm.`);

           } else if (message.content === `emM`) {
           message.delete(`emM`)
           message.author.send(`No emm.`);



     //swear filter ends here, custom commands start here.

        } else if (message.content === `>zoe`) {
            message.channel.send(`Zoe is the best lesbo. Dont @ her..`);

        } else if (message.content === `>digitali`) {
            message.channel.send(`Digitali will slaughter you if she finds out you did this command!`);

     //custom commands end here. status code, dm reply code, welcome message and client login code starts here.

      } else if (message.channel.type == "dm") {
        message.author.send(`Go away. I'm not made for use in direct messages.`);
        return;
      }
    });

client.on('guildMemberAdd', member => {
    member.guild.channels.get('734174332300820510').send("Welcome to TARDIM.");

});

client.login('NzUzNjUxMDExNjU4NDQ4OTI2.X1pSMw.-rdStK6SGNd7naGYQcF906iG9Ho');

client.on("ready", () => {
    client.user.setActivity("Type >help for help. | Welcome to SMT", { type: "WATCHING", url: "https://www.twitch.tv/cyanideee_" })
    client.user.setStatus('dnd')

})
