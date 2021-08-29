import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {TimeLineData} from "../content"


function TimeLine() {
    return (
        <div id="about">
            <p className="mb-5 text-3xl font-medium">About Me</p>
            <p className="text-gray-400">
                I am the sudent and have the better knowledge of react js next js and  redux .  I have build the several project gaining more experience .
            </p>
            <div  className="mt-10 text-gray-400" >
                <Carousel
                autoPlay
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                swipable={true}


                
                > 

                
                    {
                        TimeLineData.map(time =>{
                            return (
                                <div className="h-36"> 
                                    <p>{time.text}</p>
                                    <p>{time.year}</p>
                                </div>
                            )
                        })
                    }
                   
                </Carousel>

            </div>
            
        </div>
    )
}

export default TimeLine