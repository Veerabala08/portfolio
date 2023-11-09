import uniqid from 'uniqid'
import { skills } from '../../profile'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <div id='skills'>
        <div className='div__skills' >
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Skills