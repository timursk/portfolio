import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS } from '../common/constants/projects';

export const Project = () => {
  const { project: projectParam } = useParams();

  const project = useMemo(() => {
    return PROJECTS.find((item) => item.link === projectParam);
  }, [projectParam]);

  if (!project) {
    return <div>Looks like you went to the wrong link! Go back and select a project</div>;
  }
  const { name, description, stack, images } = project;

  return (
    <>
      <div>{name}</div>
      <div>{description}</div>
      <div>{stack}</div>
      {images.map((image, idx) => (
        <img key={idx} src={image} alt="some image" />
      ))}
    </>
  );
};
