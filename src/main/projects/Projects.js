import React from "react";
import projectDescription from "./projects-description";
import Image from "./Image";
import Description from "./Description";
const urlFCC = "https://forum.freecodecamp.org/";
function Projects(props) {
  return (
    <section className="projects-wrapper">
      <h2 id="projects">PROJECTS</h2>
      <p className="description-paragraph">
        Below are some of the projects i have completed. I have plenty of small
        learning projects on{" "}
        <a href="https://codepen.io/" target="_blank" rel="noreferrer noopener">
          {" "}
          codepen{" "}
        </a>{" "}
        completed as part of <a href={urlFCC}> Free Code Camp Curriculum </a>.
        You can view them{" "}
        <a
          href="https://codepen.io/nibble0101"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          here{" "}
        </a>
        .
      </p>
      <div className="card-wrapper">
        {projectDescription.map((project) => {
          return (
            <div key={project.key} className="project">
              <Image
                projectUrl={project.projectUrl}
                imageUrl={project.imageUrl}
                altText={project.altText}
              />
              <Description
                name={project.name}
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
