
import React, {useState} from 'react'


function PriceDetails({nextStep , userData , handleSetUserData} : {nextStep: (isFormComplete: boolean) => void , userData : any , handleSetUserData: (data: any) =>void} ) {

  return (
    <div className=''>
        <div className='flex space-x-12 items-center px-16 py-10'>
                    <div className='w-full'>
                            <div>Rent<span className='text-red-400'>*</span></div>
                            <div className="relative mt-2">
                            <input
                                type="text"
                                className="w-full border border-gray-300  py-2 px-8   "
                                placeholder=" "
                            />
                            <span className="absolute  top-2 text-gray-500 transition-all duration-200 pointer-events-none w-full flex justify-between px-2">
                                <span className="text-gray-400">₹</span>
                                <span className="text-gray-400">/Month</span>
                            </span>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div>Security<span className='text-red-400'>*</span></div>
                            <div className="relative mt-2">
                            <input
                                type="text"
                                className="w-full border border-gray-300  py-2 px-8   "
                                placeholder=" "
                            />
                            <span className="absolute  top-2 text-gray-500 transition-all duration-200 pointer-events-none w-full flex justify-between px-2">
                                <span className="text-gray-400">₹</span>
                                <span className="text-gray-400">/Month</span>
                            </span>
                            </div>
                        </div>
            </div>
            <div className='px-16 pb-10'>
                <div>Additional Pricing details to convey to agent?<span className='text-red-400'>*</span></div>
                <textarea className='h-[90px] px-6 py-3 mt-2 border-[1px] border-[#D9D9D9] w-full rounded-sm' name="" id="" placeholder='Do you have any concerns regarding pricing of your property? Add your concerns here or call us. '></textarea>
            </div>
        <div className='bg-[#122B49] flex justify-between items-center px-8 py-4 rounded-b-xl'>
            <div className='text-white'>
            Need Help? Call 9999999999

            </div>
            <button className='text-white bg-[#122B49] rounded-lg px-8 py-1 border-2 border-white'>NEXT</button>
        </div>
    </div>
)
}

export default PriceDetails