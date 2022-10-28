import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return(
    <div id='header'>
      <Link id='header-logo' to='/'>
        Logo
      </Link>
      <Link className='header-link' to='/'>
        Contact Us
      </Link>
      <Link className='header-link' to='/'>
        Manufacturing
      </Link>
      <Link className='header-link' to='/'>
        Solar Generation
      </Link>
      <Link className='header-link' to='/'>
        Login
      </Link>
    </div>
  );
}