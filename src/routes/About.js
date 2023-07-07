import myimage from '../assets/snehal-removebg-preview.png';

const About=()=>{
    return(
        <div style={{marginTop:'30px'}}  id="about" tabIndex={0}>
            <div className='heading-1' style={{paddingTop:'4rem'}}></div>
            <div className="heading-1 heading-1-medium">About Me.  <span className='section-style'></span></div>
            <div className="about">
                <div className="right">
                    <div className="image-div" >
                        <img src={myimage} className="my-image" />
                    </div>
                </div>
                <div className="left" lang='en'>
                    <div className="subtitle"  >
                        <p className='text-align-center'>Hi, I am snehal. Nice to meet you! </p>
                        <p> I am frontend developer.  Currently looking for new opportunities. seeking employment with company that offeres positive atmosphere to learn and implement skills and technologies
                            for development of Organization. Able to effectively self-manage during independent projects, as well as collaborate as part of a team.</p>
                        <p>
                            If you find my profile relevant for your job, do reach out to me :)
                        </p>
                       
                    </div>

                </div>
              
            
            </div>
            <div className='technical-skills'>
            <h3 className='subtitle technical-skills-header'>Technical Skills</h3>
                        <ul className='heading-2 about-skills-list'>
                                <li>JavaScript</li>
                                <li>Jquery</li>
                                <li>ReactJs</li>
                                <li>SCSS</li>
                                <li>NextJs</li>
                                <li>Bootstrap</li>
                                <li>Angular</li>
                                <li>Git</li>
                                <li>Jira</li>
                                <li>ServiceNow</li>
                        </ul>
            </div>
           
            
        </div>

    )
}
export default About;