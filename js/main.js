// Configure RequireJS
require.config({
    baseUrl: 'js',
    paths: {
        'remoteModule': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min'
    }
});

// Load the remote module
require(['remoteModule'], function(_) {
    // Using lodash, which was loaded from a remote location
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
});
