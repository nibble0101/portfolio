import React from "react";
import projectDescription from "./projects-description";
import Image from "./Image";
import Description from "./Description";
import coviwebImage from "./images/coviweb.png";
let project = projectDescription[0];
function Projects(props) {
  return (
    <section className="projects-wrapper">
     <h2 id = "projects">PROJECTS</h2>
      <div className="inner-wrapper">
        {projectDescription.map((project) => {
          return (
            <div key={project.key} className = "innermost-wrapper">
              <Image
                projectUrl={project.projectUrl}
                imageUrl={project.imageUrl}
                altText={project.altText}
              />
              <Description
                description={project.description}
                sourceCodeUrl={project.sourceCodeUrl}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
