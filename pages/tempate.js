const mongoose = require("mongoose");
var Template = mongoose.Schema;

var dataTemplate = new Template({

     
    city: String,

});

var finalTemplate = mongoose.model("user", dataTemplate);

module.exports = finalTemplate;