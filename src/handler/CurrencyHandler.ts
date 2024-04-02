import {
  GetAllCountryListService,
  GetHourlyDataService,
  GetDailyDataService,
  CreateNewCountryService,
  DeleteCountryService,
  GetCountryCheckAvailService,
} from "../service/CurrencyService";
import { NewResponse } from "../util/response";

export const GetCountryHandler = async (req: any, res: any) => {
  try {
    const { Data, Error } = await GetAllCountryListService();
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
        Message: "Get Country List Success",
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

export const GetHourlyById = async (req: any, res: any) => {
  try {
    const { Data, Error } = await GetHourlyDataService(req.params.id);
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
        Message: "Get Country Hourly Success",
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
export const GetCountryCheckHandler = async (req: any, res: any) => {
  try {
    const { Data, Error } = GetCountryCheckAvailService(req.params.name);
    res.send(
      NewResponse({
        Code: 200,
        Message: "Success Checking Country",
        Data: [Data],
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

export const GetDailyById = async (req: any, res: any) => {
  try {
    const { Data, Error } = await GetDailyDataService(req.params.id);
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
        Message: "Get Country Hourly Success",
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

export const CreateCountryHandler = async (req: any, res: any) => {
  try {
    const { Data, Error } = await CreateNewCountryService(req.body);
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
        Code: 201,
        Message: "Create Country Success",
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

export const DeleteCountryHandler = async (req: any, res: any) => {
  try {
    const { Data, Error } = await DeleteCountryService(req.params.id);
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
        Code: 201,
        Message: "Delete Country Success",
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
