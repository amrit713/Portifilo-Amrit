import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link as A } from 'react-scroll';
import Link from "next/link"
import { DiCssdeck } from 'react-icons/di';
import {menuItem} from "../Info"

function Header() {
    return (
       <div className="flex justify-around h-20 text-gray-300">
           
           {/* left side */}
           <div className="flex items-center text-white cursor-pointer">
            <A
            activeClass= "active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}>
               <a className="flex flex-row items-center text-white">
                <DiCssdeck size="3rem"/>
                <span>Portfolio</span>
               </a>
            </A>
            </div> 
           
        
        <div  className="items-center hidden space-x-10 text-lg font-medium sm:flex lg:space-x-20">
            {
                menuItem.map((item)=>(
                    <A
                    activeClass="active"
                    to={item.path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    key= {item.label}
                    
                    >
                        <p className="cursor-pointer hover:text-white">
                        {item.label}
                        </p>
                    
                    </A>
                ))
            }
        </div>

            {/* right side */}
        <div className="flex items-center space-x-10" >

        <Link href="https://github.com/amrit713" >
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
    )
}

export default Header
