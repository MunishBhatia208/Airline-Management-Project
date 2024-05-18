import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-cyan-900 flex justify-between align-middle'>
        <div className="log align-middle my-7 mx-9 font-extrabold text-3xl text-lime-300">
            FlightDekho
        </div>
        <ul className='flex gap-20 my-7 mx-9 text-xl px-10 text-orange-500'>
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>About Us</li>
            <li className='cursor-pointer hover:font-bold'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
