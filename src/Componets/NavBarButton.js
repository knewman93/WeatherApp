//This button will change the CSS for the Nav Bar


import React from 'react';
console.log("Hey");

class  NavBarButton extends React.Component{
    tasker =(value)=>{
        console.log(value);
    }
  
    render(){
        
        return(
            <div>
                <button className="openBtn" onClick={() => this.tasker("I did it!!")}> <div className="btnSymbol">&#9925;</div></button>
            </div>
        );
    }
  
}

export default NavBarButton; 