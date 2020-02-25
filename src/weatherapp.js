const location = "philadelphia";
//console.log (typeof location);
//const usersLocation = 'https://api.openweathermap.org/data/2.5/weather?id='+ (location) +',uk&APPID=771e493a3d89b8a84d61c5a14f1b7716';
const usersLocation = 'https://api.openweathermap.org/data/2.5/weather?q='+location+',us&units=imperial&APPID=771e493a3d89b8a84d61c5a14f1b7716';
let https = require("https"); // required for http module 
let http = require("http"); // require for status code
let weatherArray="";
function getWeather(){
    try{
        let body = "";
        https.get(usersLocation, response =>{
               
            if(response.statusCode == 200){ //reads the data
                
                response.on('data', data=>{
                body += data.toString();
                });
            }
            
            response.on('end', ()=>{
                try{
                    weatherArray = JSON.parse(body);
                    console.log("The current temperature is "+ weatherArray.main.temp + " in "+location);
                    
                }
                catch(error){
                    console.error(error.message);
                }
               
            })

        });
    }catch(error){
        console.error(error.message);
    }
}

getWeather();
