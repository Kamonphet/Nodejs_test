const express = require('express')
const debug = require('debug');
// set DEBUG-* & node app.js
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) =>{


    res.send('Hello Wolrd');

},)

app.listen(port,()=>{

    debug("listening on port $d",port);

})