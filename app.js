const express = require('express')
const debug = require('debug');
// set DEBUG-* & node app.js
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT ||4000;

app.use(morgan('combined'));


app.get("/", (req,res) =>{


    res.send('Hello World Phet');

},)

app.listen(PORT,()=>{

    debug("listening on port $d",PORT);

})