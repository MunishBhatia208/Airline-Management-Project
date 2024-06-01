import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onSignupClick }) => {
  const navigate = useNavigate();

  return (
    <nav className='justify-between align-middle flex'>
      <div className="log align-middle my-6 mx-9 font-extrabold text-5xl text-lime-300">
        FlightDekho
      </div>
      <div>
        <ul className='flex gap-10 my-9 mx-9 text-xl px-10 font-bold text-purple-950'>
          <li className='cursor-pointer hover:font-bold'>About Us</li>
          <li className='cursor-pointer hover:font-bold'>Contact</li>
          <li className='cursor-pointer hover:font-bold' onClick={()=>navigate("/signup")}>Sign Up</li>
          <li className='cursor-pointer hover:font-bold' onClick={() => navigate("/signin")}>Log In</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



