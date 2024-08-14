import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/brand_logo.png"

function Navbar() {
  return (
    <>
    <div className='flex flex-row set mt-6'>
     <div className='flex flex-row ml-6'>
        <img src={Logo} alt="" />
    </div>
<div className='flex flex-row gap-3 justify-center font font-semibold'>
    <div>
        <Link to="#">
        Menu
        </Link>
    </div>

    <div>
        <Link to="#">
        Location
        </Link>
    </div>

    <div>
        <Link to="#">
       About
        </Link>
    </div>

    <div>
        <Link to="#">
        Contact
        </Link>
    </div>

</div>

<div className=' mr-6'>
        <button className='btnN'>
            Login
        </button>
    </div>

    </div>


    </>
  )
}

export default Navbar