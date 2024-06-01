import React ,{useState}from 'react'
import Navbar from '../components/NavBar'
import Fsb from '../components/fsb'
import { Signup } from './Signup';

export const Homepage = () => {
  const [showSignup, setShowSignup] = useState(false); // State to control the visibility of the signup form

  return (
    <div className='homepage relative min-h-screen'>
      {/* Background Image */}
      <div>
        <img src="src/assets/images/backgroundimage.jpg" width="100%" className='absolute top-0 left-0 h-full w-full object-cover' alt="Background" />
      </div>

      {/* Navbar */}
      <div className='min-w-full relative top-0 z-10'>
        <Navbar onSignupClick={() => setShowSignup(true)} />
      </div>

      {/* FSB Component */}
      <div className='relative top-0 left-[1040px] w-[450px] rounded-2xl bg-slate-300 py-5 z-10'>
        <Fsb />
      </div>

      {/* Overlay and Signup Form */}
      {showSignup && (
        <div className="signup-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="modal bg-white p-5 rounded-lg shadow-lg">
            <Signup onClose={() => setShowSignup(false)} />
          </div>
        </div>
      )}
    </div>
  );
};
