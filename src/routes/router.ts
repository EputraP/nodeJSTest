import express from "express";
import {
  GetAllMoviesHandler,
  GetMovieDetailByMovieNameHandler,
  DeleteMovieByMovieNameHandler,
} from "../handler/MoviesHandler";

const router = express.Router();
router.get("/movies/All/", GetAllMoviesHandler);
router.get("/movies/:movieName", GetMovieDetailByMovieNameHandler);
router.delete("/movies/:movieName", DeleteMovieByMovieNameHandler);

export default router;
