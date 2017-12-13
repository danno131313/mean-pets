//mongo ds135966.mlab.com:35966/angular-pets -u root -p root

const mongoose = require("mongoose");
const path     = require("path");
const fs       = require("fs");
const mp       = path.join(__dirname, "../models");

mongoose.connect("mongodb://root:root@ds135966.mlab.com:35966/angular-pets");
mongoose.Promise = global.Promise;

fs.readdirSync(mp).forEach(function(file) {
    if(file.indexOf(".js") >= 0) {
        require(mp + "/" + file);
    }
});
