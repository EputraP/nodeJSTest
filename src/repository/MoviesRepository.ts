import { Movies } from "../model/Movies";
import { FunctionResponse } from "../util/functionresponse";
import { Sequelize } from "sequelize";

export const GetAllMovies = async (order: [[string, string]]) => {
  try {
    const allMoviesVal = await Movies.findAll({
      attributes: ["movies", "one_line"],
      limit: 100,
      order: order,
    });
    return FunctionResponse({
      Data: JSON.stringify(allMoviesVal, undefined, 2),
      Error: null,
    });
  } catch (error: any) {
    return FunctionResponse({
      Data: null,
      Error: error,
    });
  }
};

export const GetMovieDetailByMovieName = async (movieName: string) => {
  try {
    const movieVal = await Movies.findAll({
      attributes: [
        "movies",
        "year",
        "genre",
        "rating",
        "one_line",
        "stars",
        "votes",
        "runtime",
        "gross",
      ],
      where: {
        movies: movieName,
      },
    });
    return FunctionResponse({
      Data: JSON.stringify(movieVal, undefined, 2),
      Error: null,
    });
  } catch (error: any) {
    return FunctionResponse({
      Data: null,
      Error: error,
    });
  }
};

export const DeleteMovie = async (movieName: string) => {
  try {
    const DeleteMovieRes = await Movies.destroy({
      where: {
        movies: movieName,
      },
    });
    if (!DeleteMovieRes)
      return FunctionResponse({
        Data: null,
        Error: "Movie Already Deleted",
      });
    return FunctionResponse({
      Data: [],
      Error: null,
    });
  } catch (error: any) {
    return FunctionResponse({
      Data: null,
      Error: error.errors[0].message,
    });
  }
};
