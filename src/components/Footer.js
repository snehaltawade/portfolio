import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
const Footer =()=>{
    return(
        <div className="footer" id='contact'>
           <div><p className='contactContent heading-1'>Get in Touch!</p></div>
            <div>
                <p className='work-info contactContent'>I’m currently looking for new job opportunities. Whether you have a question or just want to say hi, Don't heistate to react out!</p>
            </div>
            <div className="footer-container">
                <div className="left">
                    <div className="phone"  style={{color:'#fff'}} >
                        <h3> <FaPhone size={20} style={{marginRight:'2rem'}} />8983605518</h3>

                    </div>
                    <div className="mail"  style={{color:'#fff'}}>
                      <h3>  <FaMailBulk size={20} style={{marginRight:'2rem'}} />snehaltawade99@gmail.com</h3>
                    </div>      
                </div>
                <div className="right">
                <div className="github"  style={{color:'#fff'}} >
                    <h3> <a href={'https://github.com/snehaltawade'} className='white'> <FaGithub size={20} style={{marginRight:'2rem'}} />github</a>  </h3>
                 </div>
                    <div className="linkedin" style={{color:'#fff'}} >
                    <h3> <FaLinkedin size={20} style={{marginRight:'2rem'}} />linkedin</h3>
                   </div>
                </div>
            </div>
            <div className='copyrights'>
                Copyright @ snehal deepak tawade 2023
            </div>
        </div>
    )
}
export default Footer;