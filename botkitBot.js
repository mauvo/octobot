if (!process.env.token) {
    console.log('Error: Specify token in environment');
	process.exit(1);
}

var Botkit = require('botkit');
var timespan = require('readable-timespan');
var controller = Botkit.slackbot({debug: true});
var bot = controller.spawn({token: process.env.token}).startRTM();

controller.hears(['uptime'], 'direct_message,direct_mention,mention', function (bot, message) 
    {
        var uptime = timespan.parse(process.uptime() * 1000);
	    bot.reply(message, ':robot_face: I am a bot named <@' + bot.identity.name + '>. I have been running for ' + uptime + '.');
    });