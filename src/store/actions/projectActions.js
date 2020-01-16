import { getFirestore } from "redux-firestore";
import history from "../../history";

export const CREATE_PROJECT = "CREATE_PROJECT";
export const CREATE_PROJECT_ERR = "CREATE_PROJECT_ERR";
export const createProject = project => {
  // make asynk call to database
  return (dispatch, getState, { getFirebase, geFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(profile, authorId);
    firestore
      .collection("projects")
      .add({
        ...project,
        authotFirstName: profile.firstName,
        authotLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: CREATE_PROJECT,
          project
        });
        history.push("/");
      })
      .catch(err => {
        dispatch({ type: CREATE_PROJECT_ERR, err });
      });
  };
};
