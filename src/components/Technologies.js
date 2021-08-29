import React from 'react'
import { DiFirebase,DiReact,DiZend } from 'react-icons/di'

function Technologies() {
    return (
        <div id="technologies" className="mt-10" >
            <div className="mb-5 border-b-4 border-red-400 rounded-full w-28" />
            <h1 className="mb-5 text-3xl font-medium">Technologies</h1>
            <p className="leading-8 text-gray-400">
                Hello, I've worked with the many technologies in the web development 
                world. From frontend to the backend Design. I used many framework and different Language for the web development.

            </p>

            <div className="justify-around pb-10 mt-4 text-white sm:flex ">
            <div className="mb-8">
                <DiReact size="3rem" />
                <div >
                    <p className="text-xl font-medium"> Front-End</p>
                    <p className="text-gray-400">Experience with <br />
                    React.js, Next.js and Redux
                    </p>
                </div>
            </div>

            <div className="mb-8">
                <DiFirebase size="3rem" />
                <div >
                    <p className="text-xl font-medium"> Back-End</p>
                    <p className="text-gray-400">Experience with <br />
                    Django and FastAPI
                    </p>
                </div>
            </div>

            <div>
                <DiZend size="3rem" />
                <div >
                    <p className="text-xl font-medium"> UI/UX</p>
                    <p className="text-gray-400">Experience with <br />
                    tools like Adobe XD and Figma
                    </p>
                </div>
            </div>

        </div>

            
        </div>
    )
}

export default Technologies