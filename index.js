(function(){

    var express = require('express');

    // Constants
    var PORT = 3000;

    // App
    var app = express();
    app.get('/', function (req, res){
        res.send('Hello world');
    });

    app.listen(PORT, "0.0.0.0");
    console.log('Running on http://localhost:' + PORT);

})();