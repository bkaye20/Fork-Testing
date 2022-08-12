const express = require('express');
var bodyParser = require('body-parser');

const book = require('./post')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', book);

app.listen(process.env.PORT || 3002, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3002))
});

