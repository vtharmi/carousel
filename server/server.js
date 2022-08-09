// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const router = require('./src/main/handler')
//
// const app = express();
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers",
//         "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//     res.setHeader( "Access-Control-Allow-Methods",  "GET,POST,PUT,DELETE,OPTIONS");
//     next();
// });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(router)
//
// const port  = process.env.PORT || 5000
// app.listen(process.env.PORT, () =>
//     console.log(`Server is listening on port ${port}!`),
// );

const express = require("express");
const bodyParser = require("body-parser");

const router = require("./src/main/handler");

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT,DELETE, POST, GET, OPTIONS"
    );
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Server is running on port", port);
});
