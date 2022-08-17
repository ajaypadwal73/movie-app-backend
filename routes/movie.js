const express = require("express");
const { getMoviesList, addMovieToDatabase, getMovieById, getMovieDetails } = require("../controllers/movie");
const router = express.Router();

router.param("movieId", getMovieById)
router.post("/addMovie", addMovieToDatabase);
router.get("/getMoviesList", getMoviesList);
router.get("/getMovieData/:movieId", getMovieDetails)

module.exports = router;
