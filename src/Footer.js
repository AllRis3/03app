import React from 'react'
import TwitterImg from "./images/twitter.png"
import FacebookImg from "./images/facebookl.png"
import InstagramImg from "./images/instagram.png"
import GitHubImg from "./images/github.png"

export default function Footer() {
  return (
    <div className='footerImages'>
        <img src={TwitterImg} alt="twitter" />
        <img src={FacebookImg} alt="twitter" />
        <img src={InstagramImg} alt="twitter" />
        <img src={GitHubImg} alt="twitter" />

    </div>
  )
}

