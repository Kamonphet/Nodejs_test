const express = require('express')
const debug = require('debug');
// set DEBUG-* & node app.js
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const profilesRouting = require("./src/router/profileRouter"); 


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");



app.use("/profiles",profilesRouting);

app.get("/", (req,res) =>{


    res.render('index',{username: 'Phet', rcheep: ['nisit','naksuksa']});

},)

app.listen(PORT,()=>{

    debug("listening on port $d",PORT);

})