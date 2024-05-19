import React from 'react'
import Navbar from './assets/components/Navbar'
import Fsb from './assets/components/fsb'
const App = () => {
  return (
    <>
    <div className='relative min-h-96'>
      <div>
      <img src="src\assets\images\backgroundimage.jpg" width = "100%"  className='absolute' alt="" />
      </div>
      <div className='fixed top-0 min-w-full'>
          <Navbar/>
      </div>
      <div className='top-20 relative '>
          <Fsb/>
      </div>
      </div>
    
  </>
  )
}
export default App
