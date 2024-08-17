import EmblaCarousel from "../carousel";

import style from "./style.module.scss";

const ProjectCard = (props) => {
  const { project, height } = props;

  return (
    <div className={style.container}>
      <EmblaCarousel
        slides={project.images}
        height={height}
        project={project}
      />
    </div>
  );
};

export default ProjectCard;
