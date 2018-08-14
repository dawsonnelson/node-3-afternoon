const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
const checkForSession = require('./middlewares/checkForSession');
const swag = require('./controllers/swag_controller');

const app = express();
app.use( bodyParser.json() );

app.use(session({
    secret: 'To everybody',
    resave: false,
    saveUninitialized: false,
}))

app.use(checkForSession);


app.get( "/api/swag", swag.read );


const PORT = process.env.SERVER_PORT || 3000;
app.listen( PORT, () => { console.log(`Server listening on port ${PORT}.`); } );
