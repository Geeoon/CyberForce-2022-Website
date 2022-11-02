import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login(props) {
  const navigate = useNavigate();
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");

  const handleSubmit = useCallback(() => {
    console.log(username);
    console.log(password);
    Cookies.set("username", username);
    Cookies.set("password", password);
    navigate("/admin")
  }, [username, password]);

  return(
    <div id='login-wrapper'>
      <div id='login-main'>
        <div className='flex-header'>
          Login
        </div>
        <input className='input-full-width' placeholder='Username' type='text' size={30} value={ username } onChange={(event) => { set_username(event.target.value) }}/><br />
        <input className='input-full-width' placeholder='Password' type='password' size={30} value={ password } onChange={(event) => { set_password(event.target.value) }}/><br /><br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}