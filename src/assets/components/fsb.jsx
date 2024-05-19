import React from 'react'
import Countriesdropdown from './countriesdropdown'
const fsb = () => {
    return (
        <>
            <div className='bg-slate-600'>
                <div className='right-0 fixed w-4/12  my-7 min-h-96 px-5 text-center text-3xl font-bold'>Search your flights</div>
                <div className='right-0 fixed w-4/12  my-16 min-h-96 px-5'>
                    <div className="container  grid grid-cols-2 gap-7 my-6">
                        <div className="border-black border-2 w-full">
                            <div className="px-2">From</div>
                            <div className="flex justify-between text-center items-center ">
                                <img src="src\assets\images\downarrow.svg" className='px-3' alt="" />
                            </div>
                        </div>
                        <div className="border-black border-2 w-full">
                            <div className="px-2">To</div>
                            <div className="flex justify-between text-center items-center ">
                                <div className="px-6 py-2 text-xl">England</div>
                                <img src="src\assets\images\downarrow.svg" className='px-3' alt="" />
                            </div>
                        </div>
                        <div className="border-black border-2 w-full">
                            <div className="px-2">Check-in</div>
                            <div className="flex justify-between text-center items-center ">
                                <div className="px-6 py-2 text-xl">England</div>
                                <img src="src\assets\images\downarrow.svg" className='px-3' alt="" />
                            </div>
                        </div>
                        <div className="border-black border-2 w-full">
                            <div className="px-2">Check-Out</div>
                            <div className="flex justify-between text-center items-center ">
                                <div className="px-6 py-2 text-xl">England</div>
                                <img src="src\assets\images\downarrow.svg" className='px-3' alt="" />
                            </div>
                        </div>
                        <div className="border-black border-2 w-full">
                            <div className="px-2">Class</div>
                            <div className="flex justify-between text-center items-center ">
                                <div className="px-6 py-2 text-xl">England</div>
                                <img src="src\assets\images\downarrow.svg" className='px-3' alt="" />
                            </div>
                        </div>
                        <div className="border-black border-2 w-full">
                            <div className="px-2">Travellers</div>
                            <div className="flex justify-between text-center items-center ">
                                <div className="px-6 py-2 text-xl">England</div>
                                <img src="src\assets\images\downarrow.svg" className='px-3' alt="" />
                            </div>
                        </div>
                        <div className="col-span-2 flex justify-between items-center border-black border-2 w-full">
                            <div className="flex items-center space-x-2 px-6 py-2">
                                <input type="radio" className="form-checkbox h-5 w-5 text-blue-600" name="g" />
                                <span>ONE WAY</span>
                            </div>
                            <div className="flex items-center space-x-2 px-6 py-2">
                                <input type="radio" className="form-checkbox h-5 w-5 text-blue-600" name="g" />
                                <span>ROUND TRIP</span>
                            </div>
                        </div>
                        <div className="col-span-2 justify-center items-center w-full ">
                            <div className=" justify-center text-center text-3xl text-white bg-cyan-950 w-3/5 m-auto py-3 rounded-lg">Find Ticket</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default fsb