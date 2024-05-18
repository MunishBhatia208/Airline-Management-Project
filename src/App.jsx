import React from 'react'
import Navbar from './assets/components/Navbar'
const App = () => {
  return (
    <>
      <img src="backgroundimage.jpg" width = "100%"  className='overflow-scroll fixed' alt="" />
      <div className='relative top-0'>
          <Navbar/>
      </div>
    
  </>
  )
}

export default App
