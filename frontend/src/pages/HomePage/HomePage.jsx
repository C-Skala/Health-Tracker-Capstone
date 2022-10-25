import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




const HomePage = () => {
  


  
  return ( 
    <div>

       <div className="d-flex justify-content-center">
      <h1>Hello and Welcome to The React Fitness Tracker!</h1>
    </div>
    <div className="d-flex justify-content-center">
      <p text = 'bold'>
        Our goal is to give everyone an oppertunity to take controll of their health with an easy to use app, 
        and allow a person to be able to have an easy conversation with thir health care provider about their health.
      </p>
    </div >
      <div className ="d-flex justify-content-around">
        <div className="d-flex justify-content-center">
              <iframe id="ytplayer" type="text/html" width="400" height="200"
              src={`https://www.youtube.com/embed/SMsTLXiyQWc?autoplay=1&origin=http://example.com`}
              frameBorder="0"></iframe> 
      </div>
      <div className="d-flex justify-content-center">
              <iframe id="ytplayer" type="text/html" width="400" height="200"
              src={`https://www.youtube.com/embed/JhA7SPqyZsY?autoplay=1&origin=http://example.com`}
              frameBorder="0"></iframe> 
      </div>
      </div>
      
    </div>
   
                          


   );
}
 
export default HomePage;