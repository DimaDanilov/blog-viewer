import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "store/reducers/postReducer";

export const rootReducer = combineReducers({ post: postReducer });
export type IRootState = ReturnType<typeof rootReducer>;
