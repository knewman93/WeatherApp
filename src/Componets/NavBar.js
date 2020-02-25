import React from "react";


let inputValue = "weqrqwer";
const getUserInput = () =>{
    inputValue = document.getElementById("inputValue").value;
    //console.log(inputValue);
    return inputValue;
}

const NavBar = () =>{
    return(
        <div className="inputField">
            {console.log(inputValue)}
            <h1>Wouldn't You Weather Know?</h1>
            <h1>Enter a Zipcode or City Name</h1>
            <input type="text" id="inputValue"/>
            <button onClick={()=>getUserInput()}></button>  
        </div>
    );
}

export default NavBar;