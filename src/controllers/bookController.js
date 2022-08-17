const BookModel= require("../models/bookModel")

//to create a new entry..
//use this api to create 11+ entries in your collection
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg:savedData})
}

// gives all the books- their bookName and authorName only 
const bookList= async function (req, res) {
    let allBooks = await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send( {msg:allBooks} )
}

//takes year as input in post request and gives list of all books published that year

const getYear= async function (req, res) {
    let getyear = req.query.year
    let booksYear= await BookModel.find({year:getyear})
    res.send( {msg:booksYear} )
}

const getParticularBook = async function (req, res){
    let get=req.body
    console.log(get)
    let fetch=await BookModel.find(get)
    res.send( {msg:fetch})
}


const getINRBooks= async function (req, res) {
    let INRPrice= await BookModel.find({"price.indian": {$in: ["100INR","200INR","500INR" ] } })

    res.send( {msg:INRPrice} )
}
    

// returns books that are available in stock or have more than 500 pages

const getRandomBooks= async function (req, res) {
let data= await BookModel.find({$or:[{stockAvailable: true},{totalPages:{ $gt:500}}]})
res.send({msg: data})
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getYear = getYear
module.exports.getINRBooks = getINRBooks
module.exports.getParticularBook = getParticularBook
module.exports.getRandomBooks = getRandomBooks

