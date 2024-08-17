import { Link } from "react-router-dom";

import { projectsList } from "../../data/data";

import style from "./style.module.scss";

const Projects = ({ start, end }) => {
  return (
    <div className={style.container}>
      {projectsList.map(
        (project, index) =>
          index >= start &&
          index < end && (
            <div
              key={index}
              className={style.projectContainer}
              style={{
                background: `linear-gradient(180deg,rgba(0, 0, 0, 0.5) 100%,rgba(0, 0, 0, 0.5) 100%),url(${project.featuredImage})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            >
              <Link to={`../proje/${project.slug}`}>
                <div className={style.textContainer}>
                  <div className={style.title}>{project?.title}</div>
                  <div className={style.text}>MİMARLIK</div>
                </div>
              </Link>
            </div>
          )
      )}
    </div>
  );
};

export default Projects;
