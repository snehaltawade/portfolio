import { Button } from "@mui/material";
import $ from 'jquery';
import { useEffect } from "react";
import resume from '../assets/resume.pdf';
const HeroImg=()=>{

 const addAnimation=()=>{
        console.log("called")
        $('#about').addClass('animation')

}

useEffect(()=>{
    const headerHeight=$('.header').height()+$('.header').height()
    $('.content').css({top:headerHeight})
    console.log("Setting heright")
},[])
  

return(
    <div className="hero" id='home'>
        <div className="mask">
        </div>
        <div className="content">
            <h3 className="heading-2">Hi, my name is</h3>
            <h1 className="heading-1">Snehal Tawade.</h1>
            <h1 className="subtitle build-web">I build for web</h1>
            <h3 className="subtitle">I'm Front end developer currently working at accenture</h3>
            <a href={resume} style={{textDecoration:'none'}} download={'snehalTawadeResume'}><Button className="btn btn-light">Download CV</Button></a>
            <Button className="btn btn-light" href="#about" onClick={addAnimation}>About Me</Button>
            
        </div>
    </div>
)
}
export default HeroImg; 