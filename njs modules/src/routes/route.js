const express = require('express')
const _ = require("lodash");
const router = express.Router();

router.get('/test-me', function (req, res) {
    //1
    const months=['January','February','March','April','May','June','July','August','September','October','November','December']
    console.log("Array after using chunk Function:")
    console.log(_.chunk(months, 4))

    //2
    const odd=[1,3,5,7,9,11,13,15,17,19]
    let tail9 = _.tail(odd);
    console.log("Array after using tail Function:")
    console.log(tail9);

    //3  
    const uni=([1,2],[1,2,3],[1,2,3,4,4],[1,2,2,3,3,4,4,5,6])
    console.log("Array after using union Function:")
    console.log(_.union(uni)) 
    res.send('My second ever api!')

    //4
    let pairs = [['HORROR', 'AKASHA GANGA' ], ['THRILLER', 'KRISHNANUM RADHAYUM'], ['ACTION', 'KILL BILL VOL 2 ']]
    let obj = _.fromPairs(pairs);
    console.log("Object after using fromPairs Function:")
    console.log(obj)
});

module.exports = router;
