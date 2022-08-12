const express = require('express');
const book = express.Router();

let players =
   [
       {
           "name": "Manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "Swimming"
           ]
       },
       {
           "name": "Gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "Soccer"
           ]
       },
       {
           "name": "Lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "Soccer"
           ]
       },
   ]
   //(that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)


book.post('/players', function (req, res) {
let newPlayer = req.body
let newPlayerName=newPlayer.name
let isRepeated = false //flag

for(let i=0; i<players.length; i++){
    if(players[i].name == newPlayerName){
        isRepeated=true;
        break;
    }
}
if(isRepeated){
    res.send("Player was already added!")
}else{
    players.push(newPlayer)
    res.send(players)
}    
});
module.exports = book;