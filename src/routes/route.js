const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")


router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook )



module.exports = router;