import React from 'react'
import "./Footer.css"
import logo3 from "../../assests/logo3.png"

const Footer = () => {
  return (
    <div className="signlang__footer section__padding">
  
      <div className="signlang__footer-logo">
        <img src={logo3} alt="signlang_logo" style={{width:"90px"}} />
      </div>

      <div className="signlang__footer-copyright">
        <h3>
          &#169; &nbsp;2023
          &nbsp;&nbsp;
          <span>SLR</span>
          &nbsp;&nbsp;
          All rights reserved.
        </h3>
      </div>
  </div>
  )
}

export default Footer