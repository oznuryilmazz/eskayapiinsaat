import { useParams } from "react-router-dom";

import ProjectCard from "../../components/projectCard";

import { projectsList } from "../../data/data";

import style from "./style.module.scss";

const Project = () => {
  const { slug } = useParams();

  const project = projectsList.find((x) => x.slug == slug);

  return (
    <>
      <div
        className={style.header}
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 100%,rgba(0, 0, 0, 0.6) 100%), url(${project?.images[0].url})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <h2>{project?.title}</h2>
      </div>
      <div className={style.container}>
        <div className={style.projectContainer}>
          <div className={style.project}>
            <p className={style.subtitle}>{project.description}</p>
          </div>
          <ProjectCard project={project} height="600px" />
          <div className={style.project}>
            <p className={style.subtitle}>{project.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
