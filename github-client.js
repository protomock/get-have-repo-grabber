var request = require('request');

module.exports = {
    getAllReposSince: function(since, done) {
        var options = {
            url: 'https://api.github.com/repositories?access_token=' + process.env.ACCESS_TOKEN,
            headers: {
                'User-Agent': 'github-repo-grabber'
            },
            json: true
        };

        if (since) options.url += "&since=" + since;

        request.get(options, function(error, response, body) {
            if (error) throw error;
            done(body);
        });
    }
}
