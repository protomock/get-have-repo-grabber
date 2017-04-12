var request = require('request');

var options = {
    url: 'https://api.github.com/repositories?access_token=' + process.env.ACCESS_TOKEN,
    headers: {
        'User-Agent': 'github-repo-grabber'
    },
    json: true
};
request.get(options, function(error, response, body) {
    if (error) throw error;

    for (var i = 0; i < body.length; i++) {
        console.log(body[i].name);
        console.log(body[i].id);
    }
});
