import React from 'react'
import Shoe from "../assets/shoe_image.png";
import Ama from "../assets/amazon.png";
import Fli from "../assets/flipkart.png";


function HeroSection() {
  return (
    <>
    <div className="flex flex-row mt-32 gap-8">

        <div className='flex flex-col ml-16'>

            <h1 className='font-bold hs flex flex-wrap'>YOUR FEET DESERVE THE BEST</h1>
            <div className='flex felx-wrap hwh'>
            <h6 className='flex felx-wrap text-gray-500 font-semibold'>YOUR FEET DESERVE THE BEST AND WE’RE 
                HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND 
                WE’RE HERE TO HELP YOU WITH OUR SHOES.</h6>
                </div>

                <div className='flex mt-8 gap-8'>
        <button className='btn rounded-sm'>
            Shop Now
        </button>
    
        <button className='btn1 rounded-sm'>
           Category
        </button>
    </div>

    <p className='mt-6 text-gray-500'>Also Avalaible On</p>

    <div className='flex flex-row mt-4 gap-4'>
    <img src={Fli} alt="" />
    <img src={Ama} alt="" />
    </div>

        </div>

        <div className='flex hw '>

        <img src={Shoe} alt="" />

        </div>

    </div>

    </>
    
  )
}

export default HeroSection