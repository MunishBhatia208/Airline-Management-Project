import React from 'react'
import Navbar from './assets/components/Navbar'
import Fsb from './assets/components/fsb'
const App = () => {
  return (
    <>
      <div className=' min-h-96 relative top-0'>
        <div>
          <img src="src\assets\images\backgroundimage.jpg" width="100%" className='absolute' alt="" />
        </div>
        <div className='min-w-full relative top-0'>
          <Navbar/>
        </div>
        <div className='relative top-0 left-[1040px] w-[450px] rounded-2xl bg-slate-300 py-5'>
          <Fsb />
        </div>
      </div>
    </>
  )
}
export default App
