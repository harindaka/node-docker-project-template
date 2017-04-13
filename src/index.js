(function(){
    //Workaround to make the app inside the docker container (run using the -it options) exit when Ctrl+C is pressed.
    process.on('SIGINT', function() {
        process.exit();
    });

    var express = require('express');

    var PORT = 3000;
    
    var app = express();
    app.get('/', function (req, res){
        res.send('Hello world');
    });

    app.listen(PORT, "0.0.0.0");
    console.log('Running on http://localhost:' + PORT);
})();