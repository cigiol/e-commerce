import { appSliceReducer, appSliceReducerName } from "./features/app/appSlice";
import { appApiReducer, appApiReducerName } from "./features/app/appApi";

const rootReducer = {
  [appSliceReducerName]: appSliceReducer,
  [appApiReducerName]: appApiReducer,
};

export default rootReducer;
