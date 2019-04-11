const fs = require('fs');
const package = require('../../package.json');
const mongoose = require('mongoose');

function loadConfiguration(callback) {
    var appConfigDir = process.env.ALTA_HOME + "/" + package.name;
    console.log('Loading configuration from path :' + appConfigDir);
    var appConfigFile = appConfigDir + "/config.json";
    fs.readFile(appConfigFile, (err, data) => {
        if (err) {
            console.log(err);
        } else {
                global.configuration = JSON.parse(data.toString());
                console.log("=====> Application configuration <=====")
                console.log(JSON.stringify(global.configuration, null, 3));
                if(global.configuration.appConfig.isDbApplication){
                    checkDbConnection(callback);
                    return;
                 }
                callback();
        }

    })

}
function checkDbConnection(cb){
    console.log("=====> Connecting to db <=====")
    var conn_string  = `mongodb://${global.configuration.dbConfig.username}:${global.configuration.dbConfig.password}@${global.configuration.dbConfig.host}/${global.configuration.dbConfig.dbName}`;
    console.info("Connection string  :",conn_string);
    mongoose.connect(conn_string,{useNewUrlParser:true});
    mongoose.connection.once('open',()=>{
        console.log("DB Connection successful");
        cb();
      }).on('error',(err)=>{
        throw err;
    })
 }
module.exports = { loadConfiguration };