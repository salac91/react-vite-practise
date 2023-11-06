import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./rootReducer";

const logger = createLogger()

const store = configureStore({ reducer: rootReducer, middleware: [thunkMiddleware, logger] });

export default store;
