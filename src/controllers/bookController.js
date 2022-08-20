const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body.book
    let author = req.body.author
    let publisher = req.body.publisher
    let bookdata = await bookModel.create(book)
    let authorData = await (authorModel.find().select({_id:1}))[0 ].id
    let publisherData = await (publisherModel.find().select({_id:1}))[0].id

    res.send({data: bookCreated})
    
    if(author == true && publisher == isValidObjectId()){
        if(author == authorData && publisherData == publisher){
            
             bookdata = await bookModel.create(req.body)
            res.send({msg : bookdata})
        }
        else {
            res.send({error:"Author or Publisher not present"})
        }
    }else{
        res.send({error: "Author or Publisher field mandatory"})
    }
        }
    

module.exports.createBook= createBook
