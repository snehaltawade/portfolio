import { Button } from "@mui/material";
import { useEffect } from "react";
import Card from "../components/Card";
const projectsList=[
    {title:'Standard Calculator using javascript',description:'created standard calculator using html,css and javascript',
skills:'Javascriptm HTML, CSS',link:'https://snehaltawade.github.io/JavascriptCalculator.github.io/',code:'https://github.com/snehaltawade/JavascriptCalculator.github.io'},
    {title:'Questionary App',description:'questions practice app ceated using Reactjs', skills: 'React, CSS',link:'https://snehaltawade.github.io/questions-app/',code:'https://github.com/snehaltawade/questions-app'},
    {title:'Plant Disease Detection',description:'Disease detection app with 98% accuracy created using python and flask', skills:'Python, css, flask',link:''},
]

const Project=()=>{
    useEffect(()=>{ document.querySelector(".card-container").scrollLeft=280},[])
   
return(
    <div className="projects" id='project' >
        <div className="heading-1 heading-1-medium">Some things I've built. <span className='section-style'></span></div>
        <div className="card-container text-align-center">
        {projectsList.map(project=>{
           return <Card project={project} key={project.title} />
        })}
        </div>
        
    </div>  
)
}
export default Project; 