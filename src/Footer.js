import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div id='footer'>
      <div className='footer-element'>
        <Link to='/'>
          <div className='footer-link'>
            Vita Vehiculum Logo
          </div>
        </Link>
      </div>

      <div className='footer-element'>
        <Link to='/'>
          <div className='footer-link'>
            Subscribe to Newsletter
          </div>
        </Link>
      </div>

      <div className='footer-element'>
        <Link to='/'>
          <div className='footer-link'>
            Links
          </div>
        </Link>
      </div>
    </div>
  );
}