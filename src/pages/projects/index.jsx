import ProjectCard from "../../components/projectCard";

import { projectsList } from "../../data/data";

import style from "./style.module.scss";

const Project = () => {
  return (
    <>
      <div className={style.header}>
        <h2>PROJELER</h2>
      </div>
      <div className={style.container}>
        <div className={style.project}>
          {projectsList.map((project, index) => (
            <ProjectCard key={index} project={project} height="600px" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
