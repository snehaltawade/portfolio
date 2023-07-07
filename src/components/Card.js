import { FaCode,FaExternalLinkAlt } from 'react-icons/fa';
import Project from '../routes/Project';
const Card=(props)=>{
    return(
        <div className="project-card">
            <div className='white'>
                <span style={{float:'left'}}><a href={props.project.code} className='white'> <FaCode/></a> </span>
                
                <span style={{float:'right'}}><a href={props.project.link} className='white'> <FaExternalLinkAlt /></a></span> </div>
            <div>
                <h3 className="subtitle white">{props.project.title}</h3>
                <h3 className="subtitle">{props.project.description}</h3>
                <h4 className="heading-2">{props.project.skills}</h4>
            </div>
        </div>
    )
}

export default Card;