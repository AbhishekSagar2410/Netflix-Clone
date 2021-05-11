import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100)
            {
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        })
        return ()=>{
            window.removeEventListener('scroll');
        }
    },[])

    return (
        <nav className={`mynavbar ${show && "mynavbar_black"} `}>
            {/* <img className='navbarLogo' src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=26" alt="" /> */}
            <h2 className='netflix_heading'>NETFLIX</h2>
        </nav>
    )
}

export default Navbar
