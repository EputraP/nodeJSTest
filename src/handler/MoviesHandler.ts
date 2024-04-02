import {
  GetAllMoviesService,
  GetMovieByMovieNameService,
  DeleteMovieByMovieNameService,
} from "../service/MoviesService";
import { NewResponse } from "../util/response";

export const GetAllMoviesHandler = async (req: any, res: any) => {
  try {
    const { Data, Error } = await GetAllMoviesService(req.query.sort);

    if (Error != null)
      return res.send(
        NewResponse({
          Code: 500,
          Message: Error,
          Data: null,
        })
      );
    res.send(
      NewResponse({
        Code: 200,
        Message: "Get Movies List Success",
        Data: Data,
      })
    );
  } catch (error: any) {
    res.send(
      NewResponse({
        Code: 500,
        Message: error,
        Data: null,
      })
    );
  }
};

export const GetMovieDetailByMovieNameHandler = async (req: any, res: any) => {
  try {
    const { Data, Error } = await GetMovieByMovieNameService(
      req.params.movieName
    );

    if (Error != null)
      return res.send(
        NewResponse({
          Code: 500,
          Message: Error,
          Data: null,
        })
      );
    res.send(
      NewResponse({
        Code: 200,
        Message: "Get Movie Detail Success",
        Data: Data,
      })
    );
  } catch (error: any) {
    res.send(
      NewResponse({
        Code: 500,
        Message: error,
        Data: null,
      })
    );
  }
};

export const DeleteMovieByMovieNameHandler = async (req: any, res: any) => {
  try {
    const { Data, Error } = await DeleteMovieByMovieNameService(
      req.params.movieName
    );
    res.send(
      NewResponse({
        Code: 201,
        Message: "Delete Movie Success",
        Data: Data,
      })
    );
  } catch (error: any) {
    console.log("iam here");
    res.send(
      NewResponse({
        Code: 500,
        Message: error,
        Data: null,
      })
    );
  }
};
