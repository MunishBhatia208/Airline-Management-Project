import React,{ useState } from 'react'
const fsb = () => {
    const [form, setForm] = useState({source: "", destination: "", checkin: "", checkout: "", economy: "", travellers: ""})
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    let flightDetails;
    return (
        <>
            <div>
                <div className='w-full px-5 text-center text-3xl font-bold'>Search your flights</div>
                <div className='w-full px-5 '>
                    <div className="container grid grid-cols-2 gap-7 my-6">
                        <div className="border-black border-2 w-full rounded-xl relative">
                            <div className="px-2">From</div>
                            <div className="flex justify-between text-center items-center relative">
                                <input onChange={handleChange} value={form.source} type="text" placeholder='Source' className='bg-slate-300 max-w-36 rounded-xl border-none' name='source' />
                                <img src="src\assets\images\downarrow.svg" className='cursor-pointer px-3' alt="" />
                            </div>
                        </div>
                        <div className="border-black border-2 w-full relative rounded-xl">
                            <div className="px-2">To</div>
                            <div className="flex justify-between text-center items-center ">
                                <input onChange={handleChange} value={form.destination} type="text" placeholder='Destination' className='bg-slate-300 max-w-36 rounded-xl border-none' name='destination' />
                                <img src="src\assets\images\downarrow.svg" className='cursor-pointer px-3' alt="" />
                            </div>
                        </div>
                        <div className="border-black border-2 w-full rounded-xl">
                            <div className="px-2">Check-in</div>
                            <div className="flex justify-between text-center items-center ">
                                <input onChange={handleChange} value={form.checkin} type="text" placeholder='Check-in' className='bg-slate-300 max-w-36 rounded-xl border-none' name='checkin' />
                                <img src="src\assets\images\downarrow.svg" className='px-3 cursor-pointer' alt="" />
                            </div>
                        </div>
                        <div className="border-black border-2 w-full rounded-xl">
                            <div className="px-2">Check-Out</div>
                            <div className="flex justify-between text-center items-center ">
                                <input onChange={handleChange} value={form.checkout} type="text" placeholder='Check-out' className='bg-slate-300 max-w-36 rounded-xl border-none' name='checkout' />
                                <img src="src\assets\images\downarrow.svg" className='px-3 cursor-pointer' alt="" />
                            </div>
                        </div>
                        <div className="border-black border-2 w-full rounded-xl">
                            <div className="px-2">Class</div>
                            <div className="flex justify-between text-center items-center ">
                                <input onChange={handleChange} value={form.economy} type="text" placeholder='economy' className='bg-slate-300 max-w-36 rounded-xl border-none' name='economy'/>
                                <img src="src\assets\images\downarrow.svg" className='px-3 cursor-pointer' alt="" />
                            </div>
                        </div>
                        <div className="border-black border-2 w-full rounded-xl">
                            <div className="px-2">Travellers</div>
                            <div className="flex justify-between text-center items-center ">
                                <input onChange={handleChange} value={form.travellers} type="text" placeholder='Travellers' className='bg-slate-300 max-w-36 rounded-xl border-none' name='travellers' />
                                <img src="src\assets\images\downarrow.svg" className='px-3 cursor-pointer' alt="" />
                            </div>
                        </div>
                        <div className="col-span-2 flex justify-between items-center border-black border-2 w-full">
                            <div className="flex items-center space-x-2 px-6 py-2">
                                <input type="radio" className="form-checkbox h-5 w-5 text-blue-600" name="g" defaultValue={1} />
                                <span>ONE WAY</span>
                            </div>
                            <div className="flex items-center space-x-2 px-6 py-2">
                                <input type="radio" className="form-checkbox h-5 w-5 text-blue-600" name="g" defaultValue={0} />
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
