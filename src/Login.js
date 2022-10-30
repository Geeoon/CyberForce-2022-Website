import React, { useCallback, useState } from "react";

export default function Login(props) {
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");

  const handleSubmit = useCallback(() => {
    console.log(username);
    console.log(password);
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