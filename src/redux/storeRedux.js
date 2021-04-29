import { combineReducers, createStore } from "redux";
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

let store = createStore(reducers)

export default store