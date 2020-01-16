import history from "../../history";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
export const signIn = credentials => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        console.log("signIn error", err);
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
export const signOut = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNOUT_ERROR", err });
      });
  };
};
export const signUp = newUser => {
  return (dispatch, getState) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            firstLetter: newUser.firstName.charAt(0)
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS", newUser });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
