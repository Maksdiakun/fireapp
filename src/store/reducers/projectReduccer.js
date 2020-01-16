import { CREATE_PROJECT, CREATE_PROJECT_ERR } from "../actions/projectActions";
const InitialState = {
  projects: [
    {
      id: "1",
      title: "Title for first project",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: "2",
      title: "Title for second project",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: "3",
      title: "Title for third project",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ]
};

const projectReduceer = (state = InitialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log("CREATE_PROJECT", action.project);
      return state;
    case CREATE_PROJECT_ERR:
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReduceer;
