import auth from "./authReducer";
import project from "./projectReduccer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth,
  project,
  fireStore: firestoreReducer,
  firebase: firebaseReducer
});
export default rootReducer;
