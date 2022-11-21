import React from 'react'
import MyImage from './images/me.jpg';
import MailImage from './images/email.png';
import LinkedInImage from './images/linkedin.png'



export default function ProfilePic() {
  return (
    <div className='imgContainer'>
      <img src={MyImage} alt="az" className='img'/>
      <h1>Angelos AllRise</h1>
      <h4>Frontend Developer</h4>
      <div className='buttonsContainer'>
        <button className='emailBtn'> 
            <img src={MailImage} alt="email" />
            Email</button>
        <button className='linkedinBtn'>
            <img src={LinkedInImage} alt="linkedin" />
            
             LinkedIn</button>
      </div>
    </div>
  )
}

