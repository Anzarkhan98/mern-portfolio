import React from 'react';
import "./Menu.css";
import {FcHome,FcAbout,FcReadingEbook,FcBiotech,FcGraduationCap,FcOrganization,FcFile,FcContacts} from "react-icons/fc";
const Menu = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <> <div className="navbar-profile-pic"> <img src='https://media.licdn.com/dms/image/D4D03AQEpLtZ_PDhziQ/profile-displayphoto-shrink_800_800/0/1682524292844?e=1697068800&v=beta&t=3PKybcPnO8l83AaFjsL2oXeImKCwSArBLcGvcsh24GU' alt='profile-pic' />
        </div> 
        <div className='nav-items'>
            <div className='nav-item'>
                <div className="nav-link"><FcHome/>Home</div>
                <div className="nav-link"><FcAbout/>About</div>
                  <div className="nav-link"><FcReadingEbook/>Work Experience</div> 
                   <div className="nav-link"><FcBiotech/>Tech Stack</div>
                   <div className="nav-link"><FcGraduationCap/>Education</div>
                   <div className="nav-link"><FcOrganization/>Project</div>
                   <div className="nav-link"><FcFile/>Testimonial</div>
                   <div className="nav-link"><FcContacts/>Contact</div>
            </div>
        </div>
         </>
    ):(
        <>
        <div className='nav-items'>
            <div className='nav-item'>
                <div className="nav-link"><FcHome title='home'/></div>
                <div className="nav-link"><FcAbout title='about'/></div>
                  <div className="nav-link"><FcReadingEbook title='work experience'/></div> 
                   <div className="nav-link"><FcBiotech title='tech stack'/></div>
                   <div className="nav-link"><FcGraduationCap title='education'/></div>
                   <div className="nav-link"><FcOrganization title='projects'/></div>
                   <div className="nav-link"><FcFile title='testimonials'/></div>
                   <div className="nav-link"><FcContacts title='contacts'/></div>
            </div>
        </div>
        </>
    )}
     
    </>
  )
}

export default Menu;