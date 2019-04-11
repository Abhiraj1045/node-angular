const express = require('express');
const path = require('path');
const posts = require('./server/routes/posts');
const conf = require('./server/conf/configuration.js')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
/* using middleware */
var root = path.join(__dirname, 'dist/node-angular/');
app.use(express.static(root));

app.use(bodyParser.json());
/*  Getting all POSTS routes */
app.use('/posts', posts);

try {
    conf.loadConfiguration(() => {
        /* catch all other routes request and return it to the index */
        app.get('*', (req, res) => {
            res.sendFile(path.join(root, 'node-angular/index.html'));
        })
        //app.use(cors({origin:[`http://localhost:${global.configuration.appConfig.port}`],credentials:true}))
        app.listen(global.configuration.appConfig.port, (req, res) => {
            console.log("=====>server started<=====");
        })
    });
} catch (err) {
    console.error("Error occurred :", err);
}
app.use((err, req, res, next) => {

})

