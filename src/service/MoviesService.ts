import {
  GetAllMovies,
  GetMovieDetailByMovieName,
  DeleteMovie,
} from "../repository/MoviesRepository";
import { FunctionResponse } from "../util/functionresponse";

export const GetAllMoviesService = async (paramVal: Number) => {
  try {
    const { Data, Error } = await GetAllMovies([
      ["one_line", paramVal == 1 ? "ASC" : "DESC"],
    ]);
    if (Error != null) return FunctionResponse({ Data: null, Error: Error });

    const movieListObj: any = JSON.parse(Data);

    return FunctionResponse({ Data: movieListObj, Error: null });
  } catch (error: any) {
    return FunctionResponse({
      Data: null,
      Error: error,
    });
  }
};

export const GetMovieByMovieNameService = async (movieName: string) => {
  try {
    const { Data, Error } = await GetMovieDetailByMovieName(movieName);
    if (Error != null) return FunctionResponse({ Data: null, Error: Error });

    const movieListObj: any = JSON.parse(Data);

    return FunctionResponse({ Data: movieListObj, Error: null });
  } catch (error: any) {
    return FunctionResponse({
      Data: null,
      Error: error,
    });
  }
};

export const DeleteMovieByMovieNameService = async (movieName: string) => {
  try {
    const { Data, Error } = await DeleteMovie(movieName);
    if (Error != null) return FunctionResponse({ Data: null, Error: Error });

    const movieListObj: any = JSON.parse(Data);

    return FunctionResponse({ Data: movieListObj, Error: null });
  } catch (error: any) {
    return FunctionResponse({
      Data: null,
      Error: error,
    });
  }
};
