import React from 'react'


function PropertyImages({nextStep , userData , handleSetUserData}:  {nextStep: (isFormComplete: boolean) => void , userData : any , handleSetUserData: (data: any) =>void}) {
  return (
    <div>
        <div className=' overflow-auto max-h-[320px] max-w-[975px]	bg-white px-16 py-8'>

        <h1 className='text-[18px] mb-8'>Add Photos / videos to attract more tenants! </h1>
        <h4 className='text-[16px] font-medium mb-4'>Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, etc</h4>
        <div className='h-[300px] border-[1px] border-[#D6D6D6] flex justify-center items-center '>
            <div className=''>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
<path d="M14.5 4H9.5L7 7H4C3.46957 7 2.96086 7.21071 2.58579 7.58579C2.21071 7.96086 2 8.46957 2 9V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H17L14.5 4Z" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <button className='flex px-3 space-x-3 mt-3 items-center rounded-lg bg-[#122B49] text-white py-2 font-medium'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span>Add Photos Now</span>
</button>
            </div>
        </div>
        </div>
        <div className='bg-[#122B49] flex justify-between items-center px-8 py-4 rounded-b-xl'>
            <div className='text-white'>
            Need Help? Call 9999999999

            </div>
            <button className='text-white bg-[#122B49] rounded-lg px-8 py-1 border-2 border-white'>SAVE & POST</button>
        </div>
    </div>
  )
}

export default PropertyImages