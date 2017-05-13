(function(){
    //Workaround to make the app inside the docker container (run using the -it options) exit when Ctrl+C is pressed.
    process.on('SIGINT', function() {
        process.exit();
    });

    var express = require('express');
    let uuid = require('uuid');  
    let os = require('os');


    let port = 3000;
    
    var app = express();
    app.get('/', function (req, res){
        res.send('Hello from app instance "' + uuid.v4() + '" in container/host "' + os.hostname() + '"');
    });

    app.listen(port, "0.0.0.0");
    console.log('Listening on port ' + port);
})();