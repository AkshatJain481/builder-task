"use client"
import React, {use, useEffect, useState} from 'react'
import { PropertyDetailsSchema } from '@/Models/PropertySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


function PropertyDetails({nextStep , userData , handleSetUserData}: {nextStep : (isFormComplete: boolean) => void , userData: any , handleSetUserData: (data: any) =>void}) {

    const BHKoptions = ["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];
    const [BHKselected, BHKsetSelected] = useState<string | null>(null);
    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(PropertyDetailsSchema),
        defaultValues:{
            propertyFor: "",
            propertyType: "",
            BHKtype: "",
            propertyDescription: "",
        }

      });
    
      const onSubmit = (data: any) => {
        const formattedData = {
          ...userData,
          ...data,
        };
        
        if(formattedData.propertyFor === "" || formattedData.propertyType === "" || formattedData.BHKtype ==="" || formattedData.propertyDescription === "" ){
         toast.error('Please fill all the required fields')
        }
        else{
            console.log(formattedData);
        handleSetUserData(formattedData);
        nextStep(true);
        toast.success('Property Details Added Successfully')
        };
        };
        useEffect(() => {
            console.log(errors);
            }, [errors]);
        

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className=' overflow-auto max-h-[320px]	bg-white pl-16 pr-36 py-8'>
                <div className='space-y-14'>
                    <div>
                    <div><span className='text-red-400'>*</span>Property For:</div>
                    <div className='grid grid-cols-3  mt-4'>
                    <label htmlFor="" className='flex items-center space-x-4'>

                    <input type="radio" {...register("propertyFor")} value="Rent" className='h-6 w-6 '/>
                        <span>Rent</span>
                    </label>
                    <label htmlFor="" className='flex items-center space-x-4'>
                    <input type="radio" {...register("propertyFor")} value="Sale" className='h-6 w-6 ' />
                        <span>Sale</span>
                    </label>
                    
                    </div>
                    </div>

                    <div>
                    <div><span className='text-red-400'>*</span>Property Type:</div>
                    <div className='grid grid-cols-3  mt-4'>
                    <label htmlFor="" className='flex items-center space-x-4'>

                    <input type="radio" {...register("propertyType")} id="" value="Residential" className='h-6 w-6 '/>
                        <span>Residential</span>
                    </label>
                    <label htmlFor="" className='flex items-center space-x-4'>
                    <input type="radio" {...register("propertyType")} value="Commercial" className='h-6 w-6 ' />
                        <span>Commercial</span>
                    </label>
                    <label htmlFor="" className='flex items-center space-x-4'>
                    <input type="radio" {...register("propertyType")} value="Land/Plot" className='h-6 w-6 ' />
                        <span>Land / Plot</span>
                    </label>
                    </div>

                    </div>
                    <div>
                        <div>BHK Type: <span className='text-red-400'>*</span></div>
                        <div className="flex justify-between mt-2">
                            {BHKoptions.map((option, index) => (
                                <button
                                key={index}
                                type='button'
                                onClick={() => {
                                    BHKsetSelected(option)
                                    setValue("BHKtype", option);
                                }}
                                className={`py-2 px-6 rounded-full border ${
                                    BHKselected === option
                                    ? 'bg-[#122B49] text-white border-blue-500'
                                    : 'bg-white text-black border-gray-300'
                                } focus:outline-none`}
                                >
                                {option}
                                </button>
                            ))}
                            </div>

                    </div>
                    <div>
                    <div>Property Description: <span className='text-red-400'>*</span></div>
                        <textarea {...register("propertyDescription")} className='h-[80px] mt-2 border-[#D9D9D9] w-full py-2 px-6 border-[1px]' placeholder='Add a description for your property to attract the best tenant' id=""></textarea>
                    </div>
                    
                </div>
            </div>
            <div className='bg-[#122B49] flex justify-between items-center px-8 py-4 rounded-b-xl'>
            <div className='text-white'>
            Need Help? Call 9999999999

            </div>
            <button className='text-white bg-[#122B49] rounded-lg px-8 py-1 border-2 border-white' type='submit'>NEXT</button>
        </div>
        </form>
        </>
  )
}

export default PropertyDetails