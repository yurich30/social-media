import { combineReducers, createStore } from "redux";
import messagePageReducer from "./messagesPageReducer"
import profilePageReducer from "./profilePageReducer"

let reducers = combineReducers({
    dialogsPage: messagePageReducer,
    profilePage: profilePageReducer
})

let store = createStore(reducers)

export default store