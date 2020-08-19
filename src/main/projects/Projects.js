import React from "react";
import projectDescription from "./projects-description";
import Image from "./Image";
import Description from "./Description";
function Projects(props) {
  return (
    <section className="projects-wrapper">
     <h2 id = "projects">PROJECTS</h2>
      <div className="card-wrapper">
        {projectDescription.map((project) => {
          return (
            <div key={project.key} className = "project">
              <Image
                projectUrl={project.projectUrl}
                imageUrl={project.imageUrl}
                altText={project.altText}
              />
              <Description
                name = {project.name}
                description={project.description}
                sourceCodeUrl={project.sourceCodeUrl}
                projectUrl={project.projectUrl}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
