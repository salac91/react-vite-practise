import {combineReducers} from "redux";
import questionReducer from "./reducers/questionReducer";

const rootReducer = combineReducers({questions: questionReducer});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
