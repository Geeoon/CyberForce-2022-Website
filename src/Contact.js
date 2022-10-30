import React, { useCallback, useState } from "react";

export default function Contact(props) {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [phone, set_phone] = useState("");
  const [file, set_file] = useState(undefined);

  const handleSubmit = useCallback(() => {
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(file);
  }, [name, email, phone, file]);

  return(
    <div id='contact-wrapper'>
      <div id='contact-info'>
        <div className='flex-header'>
          Contact Information
        </div>
        <p>
          Welcome to Sole-Zon-Solis Energy, we are happy to answer any question you might have about our services. Please fill out the contact us form and we wil get back to you shortly!
        </p><br />
        <div className='flex-header'>
          Phone Number<br /><br />
          Email Address
        </div>

      </div>

      <div id='contact-form'>
        <div className='flex-header'>
          Contact Us Form
        </div>
        <input className='input-full-width' type='text' placeholder='Name' id='name' value={name} onChange={ (event) => { set_name(event.target.value) }} required/><br />
        <input className='input-full-width' type='email' placeholder='Email Address' id='email' value={email} onChange={ (event) => { set_email(event.target.value) }} required/><br />
        <input className='input-full-width' type='tel' pattern="[0-9]{10}" placeholder='Phone Number' id='phone' value={phone} onChange={ (event) => { set_phone(event.target.value) }} required/><br />
        <input className='input-full-width' type='file' placeholder='File' id='file' onChange={ (event) => { set_file(event.target.files[0]) }}/><br /><br />
        <button onClick={handleSubmit}>Submit Form</button>
      </div>
    </div>
  );
}