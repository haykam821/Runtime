var start = new Date();

exports.onMessageReceived = (function Runtime(bot, doc, user, userID, channelID, message, event) {
    require('./../exports.js').registerCmd(['sincestart', 'runtime', 'uptime', 'upfor', 'sincestartup', 'runtimer'], 'Repeats the given message.');
    
    if(message === undefined){
        return;
    }
    if (message === doc.prefix + "sincestart" || message === doc.prefix + "runtime" || message === doc.prefix + "uptime" || message === doc.prefix + "upfor" || message === doc.prefix + "sincestartup" || message === doc.prefix + "runtimer") {
        var end = new Date() - start;
        bot.sendMessage({
            to: doc.logchannel,
            message: user + " asked for how long the bot has been running for since its last startup (`" + end + "` milliseconds)."
        });
        bot.sendMessage({
            to: channelID,
            message: "This bot has been running for `" + end + "` milliseconds since its last startup."
        });
    }
});
