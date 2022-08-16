const express = require('express');
const router = express.Router();
const userModel2= require("../models/userModel2.js")

router.get("/test-me", function (req, res) {
    res.send("MongoDB Testing")
})

router.post("/createBook", async function (req,res){
    let data = req.body
    let savedData = await  userModel2.create(data)
    res.send({ msg: savedData})

})

router.get("/getBookData", async function (req,res){
    let allBooks = await userModel2.find()
    res.send({msg: allBooks})

})



module.exports = router;