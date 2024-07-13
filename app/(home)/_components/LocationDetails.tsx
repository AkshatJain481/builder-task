"use client"
import React, {useState} from 'react'
import 'leaflet/dist/leaflet.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PropertLocationSchema} from "@/Models/PropertySchema";
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';

const SearchAndMap = dynamic(() => import('./_sub_components/SearchandMap'), {
  ssr: false,
});

function LocationDetails({nextStep , userData , handleSetUserData}: {nextStep: (isFormComplete: boolean) => void, userData: any , handleSetUserData: (data: any) =>void}) {
    
    const [position, setPosition] = useState<[number, number]>([51.505, -0.09]);
    const handleSearch = (lat: number, lon: number) => {
        setPosition([lat, lon]);
      };
    const { register, handleSubmit, watch,  formState: { errors } } = useForm({
        resolver: zodResolver(PropertLocationSchema),
        defaultValues :{
            buildingName: "",
            Locality: "",
            Landmark: "",
            City: "",
            Location: "",
        }
      });
      const onSubmit = (data: any) => {
        const formattedData = {
            ...userData,
            ...data
        }
        console.log(formattedData);

        if(formattedData.Location === "" || formattedData.Landmark === "" || formattedData.Locality === "" || formattedData.City === "" || formattedData.buildingName === ""){
            toast.error('Please fill all the fields')
        }
        else{
        toast.success('Location Details Added Successfully')
        handleSetUserData(formattedData)
        nextStep(true)
        }
      }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className=' overflow-auto max-h-[500px] bg-white px-16 py-8'>
                <div className='space-y-14'>
                    <div className='flex space-x-12 items-center'>
                        <div className='w-full'>
                            <div>Building/ Society Name <span className='text-red-400'>*</span></div>
                            <input type="text" {...register("buildingName")}  placeholder='Enter Apartment Name' className='px-4 mt-2 py-2 w-full border-[1px] border-[#7A7A7A] rounded-sm '/>
                        </div>
                        <div className='w-full'>
                            <div>Locality / Area<span className='text-red-400'>*</span></div>
                            <input type="text" placeholder='Ex: Sheetal Nagar' {...register("Locality")} className='px-4 mt-2 py-2 w-full border-[1px] border-[#7A7A7A] rounded-sm'/>
                        </div>
                    </div>
                    <div className='flex space-x-12 items-center'>
                        <div className='w-full'>
                            <div>Landmark / Street Name<span className='text-red-400'>*</span> </div>
                            <input type="text" placeholder='Prominent Landmark' {...register("Landmark")} className='px-4 mt-2 py-2 w-full border-[1px] border-[#7A7A7A] rounded-sm'/>
                        </div>
                        <div className='w-full'>
                            <div>City<span className='text-red-400'>*</span></div>
                            <input type="text" placeholder='Enter your city' {...register("City")} className='px-4 mt-2 py-2 w-full border-[1px] border-[#7A7A7A] rounded-sm'/>
                        </div>
                    </div>
                    <div className='relative'>
                    <h3 className='mb-4'>Mark Locality on Map</h3>
                    <SearchAndMap register={register} />

                    </div>



                </div>
            </div>
            <div className='bg-[#122B49] flex justify-between items-center px-8 py-4 rounded-b-xl'>
            <div className='text-white'>
            Need Help? Call 9999999999

            </div>
            <button className='text-white bg-[#122B49] rounded-lg px-8 py-1 border-2 border-white'>NEXT</button>
        </div>
        </form>
    </>
)
}

export default LocationDetails