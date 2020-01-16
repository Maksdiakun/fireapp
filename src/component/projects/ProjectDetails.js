import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

function ProjectDetails(props) {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
            <div className="cart-action gret lighten-4 grey-text">
              <div>
                Posted by : {project.authotFirstName} {project.authotLastName}
              </div>
              <div>
                {moment(project.createdAt.toDate().toString()).calendar()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project ...</p>
      </div>
    );
  }
}

// export default ProjectDetails;
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.fireStore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
