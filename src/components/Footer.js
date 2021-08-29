import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from "next/link"
import {motion} from"framer-motion"

function Footer() {
    return (
        <div className="mt-5">
            <div className="border-b-2 border-gray-100 opacity-20" />
            <div className="items-center px-10 mt-10 sm:flex sm:space-x-44 ">
                <div className="flex flex-col my-5 space-y-4 text-gray-400">
                    <p>CALL</p>
                    <motion.button
                    whileHover={{
                        scale:1.2,
                        transition:{duration:0.5},
                        
                    }}
                    
                    
                    >

                    
                    <p className="text-gray-200">9818549923</p>
                    </motion.button>
                </div>
                <div className="flex flex-col space-y-4 text-gray-400 ">
                    <p>EMAIL</p>
                    <motion.button
                    className="outline-none"
                    
                    whileHover={{
                        scale:1.2,
                        transition:{duration:0.5},
                    }}
                    whileFocus={{outline:"none"}}
                    whileTap={{scale:0.9}}
                    >
                    <p className="text-gray-200">amritghimre533@gmail.com</p>
                    </motion.button>

                </div>
            </div>
            <div className="items-center justify-between py-10 pl-10 sm:flex">
                <p > Innovating one project at a time</p>

                <div className="flex items-center mt-10 space-x-5 sm:mt-0 ">
                <Link href="https://github.com/amrit713">
                    <a>
                    < AiFillGithub size="2rem"  className="cursor-pointer hover:text-white hover:decoration-underline " />
                    </a>
                </Link>
                
                <Link href="https://www.linkedin.com/in/amrit-ghimire-b2488a199/">
                <a>
                <AiFillLinkedin size="2rem" className="cursor-pointer hover:text-white" />
                </a>
                </Link>
                
                <Link href="https://www.instagram.com/am_rit_ghimire/?hl=en">
                <a>
                <AiFillInstagram size="2rem"  className="cursor-pointer hover:text-white"/>
                </a>
                </Link>
                

            </div>
            </div>
            
        </div>
    )
}

export default Footer