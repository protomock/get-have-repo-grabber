var fs = require('fs');
var githubClient = require('./github-client');
var wstream = fs.createWriteStream('repo-names.txt');

var processData = function(data) {
    if (data.length === 0) {
        wstream.end();
        return;
    }
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name);
        wstream.write(data[i].name + '\n');
    }
    return githubClient.getAllReposSince(data[data.length - 1].id, processData)
};

githubClient.getAllReposSince(null, processData);
