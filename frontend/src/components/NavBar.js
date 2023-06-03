import React from "react";

import { useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { CgProfile, CgHome, CgWorkAlt } from "react-icons/cg";
import { HiCodeBracket, HiDevicePhoneMobile } from "react-icons/hi2";


function NavBar() {


    const [open, setOpen] = useState(true)
    const navMenu = [
        { title: "Home", spacing: true, icon: < CgHome /> },
        { title: "About", icon: <CgProfile/> },
        { title: "Skills", icon: <HiCodeBracket/>},
        { title: "Works", icon: <CgWorkAlt/>},
        { title: "Contact", icon: <HiDevicePhoneMobile/>}
    ]

    return (

        <div>
            <div 
            className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "width:5rem"} duration-300 relative`}>
            <BsArrowLeftShort 
                className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} 
                onClick={() => setOpen(!open)}
            />
            <div className="inline-flex">
                <h1 className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}>ks</h1>
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>{!open ? "" : "Kevin Salinas"}</h1>
            </div>
            <ul className='pt-2'>
                {navMenu.map((menu, index) => (
                <>
                    <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-20" : "mt-2"}`}>
                    <span className='text-2xl block float-left'>
                        {menu.icon ? menu.icon : <RiDashboardFill/>}
                    </span>
                    <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                        {menu.title}
                    </span>
                    </li>
                </>
                ))}
    
            </ul>
            </div>   
      </div>
  
    )
}

export default NavBar;