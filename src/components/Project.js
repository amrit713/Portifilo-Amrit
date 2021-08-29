import React from 'react'
import { project} from "../content"
import Link from "next/link";
import Image from "next/image"



function Project() {
    return (
        <div id="project" className="mt-7 ">
           <h1 className="text-3xl font-medium" >{project.title}</h1>
        
        <div className="grid grid-cols-1 px-6 mt-10 lg:grid-cols-3 sm:grid-cols-2 gap-7">
            {
                project.projects.map((project)=>{
                    return(
                        <div key={project.id} className="flex flex-col w-full space-y-4 overflow-hidden border-none bg-background rounded-xl hover:shadow-2xl ">
                            <div className="">
                            <Image className="object-cover" src={project.image}  />
                            </div>
                            
                            
                            <p className="m-auto text-2xl font-medium text-blue-300">{project.title}</p>
                            <div className="w-10 m-auto border-b-4 border-green-600 rounded-full"/>
                            <div className="p-4 ">
                            <p>{project.description}</p>
                            <div className="flex justify-around mt-3 text-gray-400">
                                <p>{project.develop.react}</p>
                                <p>{project.develop.next}</p>
                                <p>{project.develop.redux}</p>
                                <p>{project.develop.tailwindcss}</p>
                            </div>

                            <div className="flex justify-around mt-6" >
                            <Link href={project.code}  >
                               <a className="px-6 py-2 text-gray-400 bg-red-800 rounded-full hover:bg-red-500 hover:text-white ">Code</a> 
                            </Link>

                            <Link href={project.source}>
                               <a className="px-6 py-2 text-gray-400 bg-red-800 rounded-full bg-red-8 hover:bg-red-500 hover:text-white">Source</a> 
                            </Link>

                            
                            </div>

                            </div>
                            </div>
                    )
                })
            }

        </div>

          
        </div>
    )
}

export default Project