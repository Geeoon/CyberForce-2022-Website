import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Header(props) {
  const location = useLocation();
  const [logged_in, set_logged_in] = useState(false);
  useEffect(() => {
    set_logged_in(Cookies.get("username") && Cookies.get("password"));
  }, [location]);
  
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
      { (logged_in) ?
        <Link className='header-link' to='/admin'>
          Admin
        </Link> 
        :
        <Link className='header-link' to='/login'>
          Login
        </Link>
      }
    </div>
  );
}