import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import messagePageReducer from "./messagesPageReducer"
import profilePageReducer from "./profilePageReducer"
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
    dialogsPage: messagePageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store