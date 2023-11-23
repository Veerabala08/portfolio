import uniqid from 'uniqid'
import GithubIcon from '../Assets/square-github.png'
import VisitIcon from '../Assets/visit.png'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h2>{project.name}</h2>
    <div className='content'> <p className='project__description'>{project.description}</p></div>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a href={project.sourceCode} aria-label='source code' className='icon'>
        <img src={GithubIcon} alt="GitHub" className="icon" />
      </a>
    )}

    {project.livePreview && (
      <a href={project.livePreview} aria-label='live preview' className='icon'>
        <img src={VisitIcon} alt="LinkedIn" className="icon" />
      </a>
    )}
  </div>
)

export default ProjectContainer