import React from "react";
import { Link } from "react-router-dom";

import ProjectSummary from "./ProjectSummary";
const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(el => {
          return (
            <Link key={el.id} to={"./project/" + el.id}>
              <ProjectSummary project={el} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
