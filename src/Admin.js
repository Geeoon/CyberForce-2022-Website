import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Admin(props) {
  const navigate = useNavigate();
  const [files, set_files] = useState(null);
  const [emails, set_emails] = useState(null);

  useEffect(() => {
    if (!(Cookies.get("username") && Cookies.get("password"))) {
      navigate("/login");
    }

    // attempt AD login

    // if successful, load data and store
    set_files(null);
    set_emails(null);
  }, [navigate]);

  return(
    <div id='admin-wrapper'>
      <div className='admin-main'>
        <div id='ftp-view'>
          <div className='flex-header'>
            FTP Server View
          </div>
          <div id='file-list'>
            { files && files.map((file, index) => { return (<span key={index}>{file}</span>);}) }
          </div>
        </div>
      </div>
      <div className='admin-main'>
        <div id='email-view'>
          <div className='flex-header'>
            Emails
          </div>
          <div id='email-list'>
            { emails && emails.map((email, index) => { return (<span key={index}>{email}</span>);}) }
          </div>
        </div>
      </div>
    </div>
  );
}