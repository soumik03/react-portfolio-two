import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import './ProjectDetails.css';

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectsData.find(item => String(item.id) === projectId);

  if (!project) {
    return (
      <section className="project-details container">
        <h1>Project not found</h1>
        <p>That project does not exist in the portfolio.</p>
        <Link className="btn btn-primary" to="/projects">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="project-details container">
      <Link className="project-details-back" to="/projects">&larr; Back to Projects</Link>
      <div className="project-details-header">
        <p className="project-details-kicker">{project.category} project</p>
        <h1>{project.title}</h1>
        <p className="project-details-description">{project.longDesc}</p>
      </div>
      <div className="project-details-content">
        <div>
          <h2>About this project</h2>
          <p>{project.description}. This project is a portfolio example built to demonstrate practical frontend development and thoughtful user experiences.</p>
        </div>
        <div>
          <h2>Technologies</h2>
          <div className="project-tags">
            {project.tech.map(technology => (
              <span key={technology} className="tag">{technology}</span>
            ))}
          </div>
          <div className="project-details-actions">
            <a className="btn btn-primary" href={project.liveUrl}>Live Demo</a>
            <a className="btn btn-outline" href={project.githubUrl}>GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;