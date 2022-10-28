import React from "react";
export default function Home(props) {
  return(
    <>
      <div id='solar-image-wrapper'>
        <img id='solar-image' alt='Solar Panels' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Saul%C4%97s_elektrin%C4%97.jpg/1200px-Saul%C4%97s_elektrin%C4%97.jpg'/>
      </div>
      <div id='home-content'>
        <div id='sonnenberg-fields'>
          Sonnenberg Fields
        </div>
        <div id='sonnenberg-details'>
          <div className='sonnenberg-detail'>
            List of Solar Arrays
          </div>
          <div className='sonnenberg-detail'>
            Power Generation
          </div>
        </div>
      </div>
    </>
  );
}