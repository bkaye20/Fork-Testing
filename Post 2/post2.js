const express = require('express');
const vote = express.Router();

let names =
    [
        {
            "name": "Manish",
            "age": 15,
            votingStatus: false
        },
        {

            "name": "Yash",
            "age": 59,
            votingStatus: false
        },
        {

            "name": "Shivam",
            "age": 17,
            votingStatus: false
        },
        {
            "name": "Jay",
            "age": 52,
            votingStatus: false
        },
        {

            "name": "Kon",
            "age": 54,
            votingStatus: false
        },
        {

            "name": "Das",
            "age": 17,
            votingStatus: false
        },
    ]
vote.post('/votestatus', function (req, res) {
    let votingAge = req.query.age
    let eligiblePeople= []
    for (let i = 0; i < names.length; i++) {
        if (names[i].age >votingAge) {
            names[i].votingStatus = true;
            eligiblePeople.push(names[i])
        }
    }
        res.send({names: eligiblePeople, status:true})
    });
module.exports = vote;