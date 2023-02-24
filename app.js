const express = require('express')
const debug = require('debug');
// set DEBUG-* & node app.js
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))


app.get("/", (req,res) =>{


    res.send('Hello World Phet');

},)

app.listen(PORT,()=>{

    debug("listening on port $d",PORT);

})