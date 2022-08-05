import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../common/constants/common';
import { PROJECTS } from '../common/constants/projects';
import { WorkBack } from '../components/WorkBack';
import { WorkImage } from '../components/WorkImage';
import { WorkText } from '../components/WorkText';

export const Project = () => {
  const { project: projectParam } = useParams();

  const project = useMemo(() => {
    return PROJECTS.find((item) => item.link === projectParam);
  }, [projectParam]);

  if (!project) {
    return (
      <div>
        Looks like you went to the wrong link! Go <Link to={ROUTES.PORTFOLIO}>back</Link> and select
        a project
      </div>
    );
  }
  const { name, description, stack, images, link } = project;

  return (
    <>
      <WorkBack name={name} />

      <WorkText title="name" text={name} />
      <WorkText title="description" text={description} />
      <WorkText title="stack" text={stack} />
      <WorkText title="repo" text={link} link={true} />

      {images.map((image, idx) => (
        <WorkImage key={idx} image={image} name={name} />
      ))}
    </>
  );
};
