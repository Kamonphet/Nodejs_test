const express = require('express');
const profilesRouting = express.Router(); 
const profiles = require('../data/profiles.json');

profilesRouting.route("/").get((req,res)=>{
    res.render("profiles",{
        profiles,
    });
})

profilesRouting.route("/:id").get((req,res)=>{
    const id = req.params.id;
    // res.send("Wellcome to profile "+id);
    res.render("profile",{
        profile: profiles[id],
    })
});

module.exports =profilesRouting; 