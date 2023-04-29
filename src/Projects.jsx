import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { projects, isLoading } = useFetchProjects();

  if (isLoading) {
    return <section className="projects">Loading...</section>;
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, url, img, title } = project;
          return (
            <a
              className="project"
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <img src={img} alt={title} className="img"></img>
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
