import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


// Routers

import InfoRoute from "./routes/InfoRoute";

const app = express();
app.use(cors());
app.use(bodyParser().json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type,Accept');
    next();
});
app.options('*', cors());


app.use('/', InfoRoute);

const PORT = process.env.PORT || 500;

app.listen(PORT,() => {
    return console.log(`${'Server is running at' + PORT}`)
})