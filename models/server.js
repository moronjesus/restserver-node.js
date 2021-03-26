const express = require('express');
const cors    = require('cors');
 
class Server {

    constructor(){

        this.app      = express();
        this.port     = process.env.PORT;
        this.userPath = '/api/user'
        
        //Middleware
        this.middleware();

        //rutas
        this.router();

    }

    middleware(){

        //Cors
        this.app.use( cors() );

        //Directorio público
        this.app.use( express.static('public'));

        //Lectura y parseo del body
        this.app.use( express.json());

    }

    router(){
        this.app.use( this.userPath, require('../routes/user.js'));

    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log('Puerto: ', this.port);
        });
    }

}

module.exports = Server;