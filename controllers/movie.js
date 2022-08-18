const Movie = require("../models/movie");

const getMoviesList = async (req, res) => {
  try {
    console.log("In getMovieList fun");
    const pageOptions = {
      offset: parseInt(req.query.offset, 10) || 0,
      limit: parseInt(req.query.limit, 10) || 10,
    };
    console.log("Executing query...");
    const movieList = await Movie.find()
      .skip(pageOptions.offset)
      .limit(pageOptions.limit);
    console.log("Query executed successfully🚀");
    return res.status(200).json(movieList);
  } catch (err) {
    console.log("Error while retrieving list => ", err);
    return res.status(404).json({
      message: "Something went wrong",
    });
  }
};

const addMovieToDatabase = async (req, res) => {
  try {
    console.log("Request body is => ", req.body);
    const movie = new Movie(req.body);
    movie.save((err, movie) => {
      if (err) {
        console.log("Error while saving movie to database => ", err);
        return res.status(404).json({
          message: "Something went wrong",
        });
      }
      return res.status(200).json({
        movie,
      });
    });
  } catch (err) {
    console.log("Error while saving movie to database => ", err);
    return res.status(404).json({
      message: "Something went wrong",
    });
  }
};

const getMovieById = async (req, res, next, id) => {
  try {
    const movie = await Movie.findById(id);
    req.movie = movie;
    next();
  } catch (e) {
    console.log("Error while fetching movie from database => ", err);
    return res.status(404).json({
      message: "Something went wrong",
    });
  }
};
const getMovieDetails = async (req, res) => {
  try {
    if (req.movie) {
      return res.status(200).json(req.movie);
    } else {
      console.log("Movie fetching issue ");
      return res.status(404).json({
        message: "Something went wrong",
      });
    }
  } catch (e) {
    console.log("Movie fetching issue ", e);
    return res.status(404).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getMoviesList,
  addMovieToDatabase,
  getMovieById,
  getMovieDetails,
};
