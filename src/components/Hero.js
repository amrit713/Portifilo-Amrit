import React from 'react'


function Hero() {
    return (
        <div id="home" className="flex flex-col mt-20 space-y-10" >
        <div className="flex flex-col space-y-3 text-5xl font-medium">
       
            <h1> Welcome To</h1>
            <h1>My Personal Portfolio</h1>
            
        </div> 
               
         <p className="leading-8 text-left text-gray-400 ">Hi there! I am Amrit Ghimire! You might also know me as Amrit. I've been coding for over 1 years now. As a React Js  developer I've been doing awesome project with react js , next js and redux. Currently, I'm studying the computer science.</p>
        
         <button className="px-12 py-2 font-medium rounded-full bg-gradient-to-r from-blue-600 to-blue-300 sm:w-56">
             Learn More
         </button>
         

       
        
         
        </div>
    )
}

export default Hero
