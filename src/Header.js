import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return(
    <div id='header'>
      <Link id='header-logo' to='/'>
        Logo
      </Link>
      <Link className='header-link' to='/contact'>
        Contact Us
      </Link>
      <Link className='header-link' to='/manufacturing'>
        Manufacturing
      </Link>
      <Link className='header-link' to='/solargen'>
        Solar Generation
      </Link>
      <Link className='header-link' to='/login'>
        Login
      </Link>
    </div>
  );
}