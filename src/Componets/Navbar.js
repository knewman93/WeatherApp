//Used to host the input field which grabs the location of the user 

import React from 'react';
import NavBarButton from  './NavBarButton';
function Navbar (){
    return(
        <div>
              <div className="navBar">
      
        <input type="text" id="location" name="location"></input>
        
    </div>
    <NavBarButton/>
        </div>
  
    );
}

export default Navbar;