var webdriverio = require('webdriverio');
var options = {
	desiredCapabilities: {
        browserName: "firefox",
        proxy: "http://localhost:8080"
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });
