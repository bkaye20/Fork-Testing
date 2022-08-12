const express = require('express');
const vote = require('../Post 2/post2')
const app = express();

app.use('/', vote)

app.listen(process.env.PORT || 3002, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3002))
})

