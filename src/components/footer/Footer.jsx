import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="line"></div>
        <div className="socials">
            <a href="https://github.com/Robin920?tab=repositories" target="_blank">
              <img src="/image/icons8-github-64.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/dewang-shekhar-7a69aa1a2/" target="_blank">
              <img src="/image/icons8-linkedin-circled-48.png" alt="linkedin" />
            </a>
        </div>
        <p>Created with <span>&hearts;</span> by <span>Dewang Shekhar</span></p>
    </div>
  )
}

export default Footer