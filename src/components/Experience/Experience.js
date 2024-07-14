import './Experience.css'
import { experience } from '../../profile'
import uniqid from 'uniqid'

const Experience = () => {
    if (!experience.length) return null
    return (<>
        
        <h2 className='section__title'>Experience</h2>
        <div className='timeline'>
            {experience.map((exp) => (
                        <div key={uniqid()} className='expcontent'>
                        <div className="experience-item">
                        
     <h3 className='exprole'><span className="bullet-point"></span>{exp.role},</h3>
                            <p className='expdate'>{exp.from} - {exp.to}, {exp.location}.</p>
                            <p className='expdes'>{exp.description}</p>
                        </div>
                         </div>
                    ))}
            </div>
            <section className='section__experience'> </section>
        </>
    )
}

export default Experience