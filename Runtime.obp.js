var start = new Date();

exports.onMessageReceived = (function Version(bot, doc, user, userID, channelID, message, event) {
    if(message === undefined){
        return;
    }
    if (message === "*sincestart" || message === "*runtime" || message === "*uptime" || message === "*upfor" || message === "*sincestartup" || message === "*runtimer") {
        var end = new Date() - start;
        bot.sendMessage({
            to: doc.logchannel,
            message: user + " asked for how long the bot has been running for since its last startup (`" + end + "` milliseconds)"
        });
        bot.sendMessage({
            to: channelID,
            message: "This bot has been running for `" + end + "` milliseconds since its last startup."
        });
    }
});
