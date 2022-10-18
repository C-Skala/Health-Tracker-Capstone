import React, { useState, useEffect } from 'react';


const HomePage = () => {
  return ( 
    <div>

       <div>
      <p>hello world</p>
    </div>
    
      <div>
              <iframe id="ytplayer" type="text/html" width="640" height="360"
              src={`https://www.youtube.com/embed/SMsTLXiyQWc?autoplay=1&origin=http://example.com`}
              frameBorder="0"></iframe> 
      </div>
      <div>
              <iframe id="ytplayer" type="text/html" width="640" height="360"
              src={`https://www.youtube.com/embed/JhA7SPqyZsY?autoplay=1&origin=http://example.com`}
              frameBorder="0"></iframe> 
      </div>
    </div>
   
                          


   );
}
 
export default HomePage;