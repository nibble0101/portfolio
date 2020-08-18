import React from "react";
import projectDescription from "./projects-description";
import Image from "./Image";
import Description from "./Description";

function Projects(props) {
  return (
    <section className="projects-wrapper">
      {projectDescription.map((project) => {
        return (
          <div key={project.key}>
            <Image projectUrl={project.projectUrl} altText={project.altText} />
            <Description
              description={project.description}
              sourceCodeUrl={project.sourceCodeUrl}
            />
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
