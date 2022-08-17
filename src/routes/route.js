const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController");

router.post("/createBook",BookController.createBook);

router.post("/bookList",BookController.bookList);

router.get("/getYear",BookController.getYear);

router.get("/getBooks",BookController.getINRBooks);

router.get("/getParticularBook",BookController.getParticularBook);


router.get("/getRandomBooks",BookController.getRandomBooks)

module.exports = router;