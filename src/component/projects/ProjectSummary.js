import React from "react";

const ProjectSummary = ({ project }) => {
  const { id, title, content, authotFirstName, authotLastName } = project;
  return (
    <div className="card z-depth-0 grey-text text-darken-3">
      <span className="card-title">{title} </span>
      <p>
        Posted by : {authotFirstName} {authotLastName}
      </p>
      <p className="greu-text">{content}</p>
    </div>
  );
};

export default ProjectSummary;
