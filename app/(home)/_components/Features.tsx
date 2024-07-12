import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FeaturesSchema } from '@/Models/PropertySchema'
import { toast } from 'react-toastify'
import { set } from 'zod'

function Features({nextStep, userData , handleSetUserData}: {nextStep : (isFormComplete: boolean) => void , userData: any , handleSetUserData: (data: any) =>void }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(FeaturesSchema),
        defaultValues: {
            NonVeg: false,
            Pets: false,
            Electricity: '',
            Amenities: [],
        }
    });
    
    
    const onSubmit = (data: any) => {
        const formattedData = {
            ...userData,
            ...data,
        }
        console.log(formattedData);
        if(formattedData.NonVeg === false || formattedData.Pets === false || formattedData.Electricity === "" || formattedData.Amenities.length === 0){
            toast.error('Please fill all the fields')
        }
        else{
        toast.success('Features Added Successfully')
        handleSetUserData(formattedData)
        nextStep(true)
        }
    };

    return (  
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className=' overflow-auto max-h-[320px] max-w-[975px]	bg-white px-16 py-8'>
                <div className='space-y-14'>
                    <div>
                    <div><span className='text-red-400'>*</span>Non Veg:</div>
                    <div className='grid grid-cols-3  mt-4'>
                    <label htmlFor="" className='flex items-center space-x-4'>

                    <input type="radio" {...register("NonVeg")} value={1} className='h-6 w-6 '/>
                        <span>Allowed</span>
                    </label>
                    <label htmlFor="" className='flex items-center space-x-4'>
                    <input type="radio" {...register("NonVeg")} value={0} className='h-6 w-6 ' />
                        <span>Not Allowed</span>
                    </label>
                    
                    </div>
                    </div>

                    <div>
                    <div><span className='text-red-400'>*</span>Pets Allowed:</div>
                    <div className='grid grid-cols-3  mt-4'>
                    <label htmlFor="" className='flex items-center space-x-4'>

                    <input type="radio" {...register("Pets")} value={1} className='h-6 w-6 '/>
                        <span>Yes</span>
                    </label>
                    <label htmlFor="" className='flex items-center space-x-4'>
                    <input type="radio" {...register("Pets")} value={0} className='h-6 w-6 ' />
                        <span>No</span>
                    </label>
                    </div>

                    </div>

                    <div>
                    <div><span className='text-red-400'>*</span>Electricity</div>
                    <div className='grid grid-cols-3  mt-4'>
                    <label htmlFor="" className='flex items-center space-x-4'>

                    <input type="radio" {...register("Electricity")} value={"Rare/No Powercut"} className='h-6 w-6 '/>
                        <span>Rare/No Powercut</span>
                    </label>
                    <label htmlFor="" className='flex items-center space-x-4'>
                    <input type="radio" {...register("Electricity")} value={"Frequent Powercut"} className='h-6 w-6 ' />
                        <span>Frequent Powercut</span>
                    </label>
                    </div>

                    </div>
                    <div>
                        <h4 className='text-[18px] font-semibold mb-16 '>SOCIETY AMENITIES</h4>
                        <div className='grid grid-cols-4 gap-24'>
                            <div className='text-center space-y-2'>
                                        <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
            <g clip-path="url(#clip0_7234_3598)">
            <path d="M6.19092 20.3213L23.8499 33.1501" stroke="#7A7A7A" stroke-width="1.5"/>
            <path d="M10.3721 19.5063L28.7413 33.0054" stroke="#7A7A7A" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M1.00003 29.5233C1.00003 24.0984 5.39776 19.7007 10.8226 19.7007H25.1774C30.6022 19.7007 35 24.0984 35 29.5233V33.0007H1.00003V29.5233Z" stroke="#7A7A7A" stroke-width="2.00007"/>
            <path d="M23.1743 25.0288H25.4048" stroke="#7A7A7A" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M16.7622 16.0562H18.8997" stroke="#7A7A7A" stroke-linecap="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0002 20.4002C23.7555 20.4002 28.4212 16.2141 28.4212 11.0502C28.4212 5.88633 23.7555 1.7002 18.0002 1.7002C12.2448 1.7002 7.5791 5.88633 7.5791 11.0502C7.5791 16.2141 12.2448 20.4002 18.0002 20.4002ZM18.0002 18.7002C21.6627 18.7002 24.6317 16.0363 24.6317 12.7502C24.6317 9.4641 21.6627 6.80019 18.0002 6.80019C14.3376 6.80019 11.3686 9.4641 11.3686 12.7502C11.3686 16.0363 14.3376 18.7002 18.0002 18.7002Z" fill="#7A7A7A"/>
            <path d="M28.1293 10.2002H7.37637L5.3999 7.60297V5.59603L17.9999 1.7002L30.5999 5.59603V7.60297L28.1293 10.2002Z" fill="white" stroke="#7A7A7A" stroke-width="2"/>
            <mask id="path-8-inside-1_7234_3598" fill="white">
            <ellipse cx="15.1578" cy="12.7504" rx="0.947368" ry="0.85"/>
            </mask>
            <ellipse cx="15.1578" cy="12.7504" rx="0.947368" ry="0.85" fill="#7A7A7A"/>
            <path d="M14.994 12.7504C14.994 12.6366 15.0479 12.5583 15.0857 12.5244C15.1216 12.4922 15.1502 12.4892 15.1578 12.4892V14.7115C16.1783 14.7115 17.2163 13.9438 17.2163 12.7504H14.994ZM15.1578 12.4892C15.1654 12.4892 15.1941 12.4922 15.23 12.5244C15.2678 12.5583 15.3216 12.6366 15.3216 12.7504H13.0993C13.0993 13.9438 14.1373 14.7115 15.1578 14.7115V12.4892ZM15.3216 12.7504C15.3216 12.8642 15.2678 12.9425 15.23 12.9764C15.1941 13.0086 15.1654 13.0115 15.1578 13.0115V10.7892C14.1373 10.7892 13.0993 11.557 13.0993 12.7504H15.3216ZM15.1578 13.0115C15.1502 13.0115 15.1216 13.0086 15.0857 12.9764C15.0479 12.9425 14.994 12.8642 14.994 12.7504H17.2163C17.2163 11.557 16.1783 10.7892 15.1578 10.7892V13.0115Z" fill="#7A7A7A" mask="url(#path-8-inside-1_7234_3598)"/>
            <mask id="path-10-inside-2_7234_3598" fill="white">
            <ellipse cx="20.8419" cy="12.7504" rx="0.947368" ry="0.85"/>
            </mask>
            <ellipse cx="20.8419" cy="12.7504" rx="0.947368" ry="0.85" fill="#7A7A7A"/>
            <path d="M20.6781 12.7504C20.6781 12.6366 20.7319 12.5583 20.7697 12.5244C20.8056 12.4922 20.8343 12.4892 20.8419 12.4892V14.7115C21.8624 14.7115 22.9004 13.9438 22.9004 12.7504H20.6781ZM20.8419 12.4892C20.8495 12.4892 20.8782 12.4922 20.9141 12.5244C20.9519 12.5583 21.0057 12.6366 21.0057 12.7504H18.7834C18.7834 13.9438 19.8214 14.7115 20.8419 14.7115V12.4892ZM21.0057 12.7504C21.0057 12.8642 20.9519 12.9425 20.9141 12.9764C20.8782 13.0086 20.8495 13.0115 20.8419 13.0115V10.7892C19.8214 10.7892 18.7834 11.557 18.7834 12.7504H21.0057ZM20.8419 13.0115C20.8343 13.0115 20.8056 13.0086 20.7697 12.9764C20.7319 12.9425 20.6781 12.8642 20.6781 12.7504H22.9004C22.9004 11.557 21.8624 10.7892 20.8419 10.7892V13.0115Z" fill="#7A7A7A" mask="url(#path-10-inside-2_7234_3598)"/>
            <path d="M18.0001 3.40039L18.7073 5.1624H20.9959L19.1444 6.25138L19.8516 8.01338L18.0001 6.9244L16.1486 8.01338L16.8558 6.25138L15.0043 5.1624H17.2929L18.0001 3.40039Z" fill="#7A7A7A"/>
            </g>
            <defs>
            <clipPath id="clip0_7234_3598">
            <rect width="36" height="34" fill="white"/>
            </clipPath>
            </defs>
            </svg>
                            <p className='text-[#7A7A7A] '>24/7  Security</p>
                            <input type="checkbox" name="security" id="" className='h-[26px] w-[26px] '/>
                            </div>

                            <div className='text-center space-y-2'>
                            <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
<g clip-path="url(#clip0_7234_3619)">
<path d="M26.5056 19.9487H32.4577C32.737 19.9489 33.0115 20.0194 33.2554 20.1536C33.4992 20.2878 33.7043 20.4813 33.851 20.7156C33.9978 20.9499 34.0814 21.2174 34.094 21.4925C34.1066 21.7677 34.0476 22.0415 33.9228 22.2879L30.5895 28.8655C30.4631 29.1148 30.2735 29.3276 30.0392 29.4832C29.8048 29.6389 29.5336 29.7321 29.252 29.7539C28.9703 29.7757 28.6877 29.7253 28.4316 29.6076C28.1755 29.4899 27.9546 29.3089 27.7904 29.0821L24.3096 24.281" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.0888 15.1852C27.4772 15.377 27.7726 15.713 27.9099 16.1195C28.0473 16.526 28.0154 16.9696 27.8214 17.353L22.7312 27.3932C22.6349 27.5832 22.5017 27.7525 22.339 27.8916C22.1764 28.0307 21.9876 28.1369 21.7833 28.204C21.5791 28.2711 21.3635 28.2978 21.1488 28.2827C20.934 28.2676 20.7244 28.2109 20.5319 28.1158L4.97148 20.4341C3.84125 19.8725 2.98255 18.8922 2.58328 17.7076C2.18401 16.5231 2.27669 15.2307 2.84103 14.1134L5.10258 9.60329C5.38446 9.04918 5.77423 8.55526 6.24964 8.14976C6.72506 7.74425 7.27679 7.4351 7.87335 7.23995C8.4699 7.0448 9.09958 6.96748 9.72643 7.01241C10.3533 7.05734 10.965 7.22363 11.5267 7.5018L27.0888 15.1852Z" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.3335 31.2645H8.49541C9.10624 31.2687 9.70611 31.1044 10.2273 30.7902C10.7486 30.476 11.1704 30.0244 11.4453 29.4863L13.8051 24.7983" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.3335 34.4974V28.0312" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.542 12.75H10.5562" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7234_3619">
<rect width="35" height="34" fill="white" transform="translate(0.333496)"/>
</clipPath>
</defs>
</svg>

                            <p className='text-[#7A7A7A] '>CCTV Camera</p>
                            <input type="checkbox" name="security" id="" className='h-[26px] w-[26px] '/>
                            </div>

                            <div className='text-center space-y-2'>
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
<g clip-path="url(#clip0_7234_3649)">
<path d="M33.3368 10.9806L29.9368 14.7004L27.3868 7.81876C27.1463 7.11448 26.7164 6.50646 26.1538 6.07483C25.5912 5.6432 24.9222 5.40823 24.235 5.40088H11.9168C11.2241 5.38348 10.543 5.59806 9.96483 6.01589C9.38664 6.43372 8.93896 7.03485 8.68172 7.73878L6.13682 14.7004L2.73682 10.9806" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.53662 22.1401H9.55362" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.5366 22.1401H26.5536" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.9368 14.7012H6.13682C4.25905 14.7012 2.73682 16.3666 2.73682 18.421V25.8606C2.73682 27.915 4.25905 29.5804 6.13682 29.5804H29.9368C31.8146 29.5804 33.3368 27.915 33.3368 25.8606V18.421C33.3368 16.3666 31.8146 14.7012 29.9368 14.7012Z" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.13672 29.5801V33.2999" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.937 29.5801V33.2999" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7234_3649">
<rect width="34" height="36" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

                            <p className='text-[#7A7A7A] '>Reserved Parking</p>
                            <input type="checkbox" name="security" id="" className='h-[26px] w-[26px] '/>
                            </div>

                            <div className='text-center space-y-2'>
                            <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
<path d="M7.00244 32.2992C7.00244 32.2992 7.00244 10.9614 7.00244 10.526C7.00244 10.0905 23.3316 10.0901 23.3316 10.526C23.3316 10.9618 23.3316 32.2992 23.3316 32.2992" stroke="#7A7A7A" stroke-width="1.8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.712251 0.585786C0.126465 1.17157 0.126465 2.11438 0.126465 4V30C0.126465 31.8856 0.126465 32.8284 0.712251 33.4142C1.29804 34 2.24085 34 4.12646 34H26.2065C28.0921 34 29.0349 34 29.6207 33.4142C30.2065 32.8284 30.2065 31.8856 30.2065 30V4C30.2065 2.11438 30.2065 1.17157 29.6207 0.585786C29.0349 0 28.0921 0 26.2065 0H4.12646C2.24085 0 1.29804 0 0.712251 0.585786ZM28.3718 1.83825H1.89209V32.1626H28.3718V1.83825Z" fill="#7A7A7A"/>
<path d="M15.1665 11.0498V32.0931" stroke="#7A7A7A" stroke-width="1.8"/>
<path d="M9.71125 4.3864C10.1064 3.96444 10.776 3.96444 11.1711 4.3864L12.4465 5.7484C13.0447 6.38721 12.5918 7.43193 11.7166 7.43193H9.16574C8.29057 7.43193 7.83761 6.38721 8.43582 5.7484L9.71125 4.3864Z" fill="#7A7A7A"/>
<path d="M18.7347 7.07747C19.1298 7.49943 19.7994 7.49943 20.1945 7.07747L21.47 5.71546C22.0682 5.07666 21.6152 4.03193 20.74 4.03193L18.1892 4.03193C17.314 4.03193 16.8611 5.07666 17.4593 5.71546L18.7347 7.07747Z" fill="#7A7A7A"/>
</svg>

                            <p className='text-[#7A7A7A] '>Lift</p>
                            <input type="checkbox" name="security" id="" className='h-[26px] w-[26px] '/>
                            </div>

                            <div className='text-center space-y-2'>
                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
<path d="M10.4167 23.0916C13.5333 23.0916 16.0833 20.4991 16.0833 17.3541C16.0833 15.7108 15.2758 14.1525 13.6608 12.835C12.0458 11.5175 10.8275 9.56247 10.4167 7.5083C10.0058 9.56247 8.80167 11.5316 7.1725 12.835C5.54333 14.1383 4.75 15.725 4.75 17.3541C4.75 20.4991 7.3 23.0916 10.4167 23.0916Z" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.2933 9.34999C19.2676 7.79325 19.9583 6.07613 20.3333 4.27832C21.0416 7.81999 23.1666 11.22 25.9999 13.4867C28.8333 15.7533 30.2499 18.445 30.2499 21.2783C30.258 23.2366 29.6845 25.1531 28.6021 26.785C27.5196 28.4169 25.977 29.6907 24.1698 30.4448C22.3626 31.199 20.3721 31.3996 18.4508 31.0211C16.5294 30.6427 14.7637 29.7023 13.3774 28.3192" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            <p className='text-[#7A7A7A] '>Regular water supply</p>
                            <input type="checkbox" name="security" id="" className='h-[26px] w-[26px] '/>
                            </div>

                            <div className='text-center space-y-2'>
                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
<path d="M24.9167 29.75V26.9167C24.5409 26.9167 24.1806 26.7674 23.9149 26.5017C23.6493 26.2361 23.5 25.8757 23.5 25.5V24.0833C23.5 23.3319 23.7985 22.6112 24.3299 22.0799C24.8612 21.5485 25.5819 21.25 26.3333 21.25H29.1667C29.9181 21.25 30.6388 21.5485 31.1701 22.0799C31.7015 22.6112 32 23.3319 32 24.0833V25.5C32 25.8757 31.8507 26.2361 31.5851 26.5017C31.3194 26.7674 30.9591 26.9167 30.5833 26.9167" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.7503 21.25V9.20833C27.7503 7.8933 27.2279 6.63213 26.2981 5.70226C25.3682 4.77239 24.107 4.25 22.792 4.25C21.477 4.25 20.2158 4.77239 19.2859 5.70226C18.3561 6.63213 17.8337 7.8933 17.8337 9.20833V24.7917C17.8337 26.1067 17.3113 27.3679 16.3814 28.2977C15.4515 29.2276 14.1904 29.75 12.8753 29.75C11.5603 29.75 10.2991 29.2276 9.36925 28.2977C8.43939 27.3679 7.91699 26.1067 7.91699 24.7917V12.75" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.5837 29.7498V26.9165H24.917" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.0835 7.08333H10.7502V4.25" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.7503 7.08333C11.126 7.08333 11.4864 7.23259 11.7521 7.49827C12.0177 7.76394 12.167 8.12428 12.167 8.5V9.91667C12.167 10.6681 11.8685 11.3888 11.3371 11.9201C10.8058 12.4515 10.0851 12.75 9.33366 12.75H6.50033C5.74888 12.75 5.02821 12.4515 4.49686 11.9201C3.9655 11.3888 3.66699 10.6681 3.66699 9.91667V8.5C3.66699 8.12428 3.81625 7.76394 4.08192 7.49827C4.3476 7.23259 4.70794 7.08333 5.08366 7.08333V4.25" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            <p className='text-[#7A7A7A] '>Power Back up-Partial </p>
                            <input type="checkbox" name="security" id="" className='h-[26px] w-[26px] '/>
                            </div>

                            <div className='text-center space-y-2'>
                            <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto '>
<path d="M34.9087 1.90234L34.9087 33.0397" stroke="#7A7A7A" stroke-width="1.8" stroke-linecap="round"/>
<path d="M30.1435 33.2684C28.9318 33.4662 28.448 33.6644 26.7508 34.6532C25.0537 35.6421 25.7815 36.6317 26.7508 36.6317C27.7202 36.6317 40.3214 36.4341 42.7447 36.6317C45.168 36.8292 43.4717 35.3834 42.7447 35.2468C42.0177 35.1102 40.0791 35.4449 39.1097 35.2468C38.1404 35.0486 37.8993 33.6637 36.4441 33.2684C34.9888 32.873 31.3551 33.0705 30.1435 33.2684Z" fill="#7A7A7A" stroke="#7A7A7A" stroke-width="0.988904" stroke-linecap="round"/>
<path d="M22.5098 9.57422C22.5098 9.57422 27.5313 17.697 28.0021 17.697C28.4729 17.697 34.9068 15.1761 34.9068 15.1761" stroke="#7A7A7A" stroke-width="1.8" stroke-linecap="round"/>
<path d="M16.0015 24H2.00146L4.73924 32H12.9723L16.0015 24Z" fill="#7A7A7A" stroke="#7A7A7A" stroke-width="0.988904" stroke-linecap="round"/>
<path d="M8.49682 9.5C8.49682 9.5 0.501465 15.5 1.02202 15.8056C1.54258 16.1111 8.49682 19 8.49682 19" stroke="#7A7A7A" stroke-width="1.8" stroke-linecap="round"/>
<path d="M22.0015 29L21.8608 36.6503" stroke="#7A7A7A" stroke-width="1.8" stroke-linecap="round"/>
<path d="M10.7686 27.625V36.6503" stroke="#7A7A7A" stroke-width="1.8" stroke-linecap="round"/>
<mask id="path-8-inside-1_7234_3697" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9907 8C18.1999 8 19.9907 6.20914 19.9907 4C19.9907 1.79086 18.1999 0 15.9907 0C13.7816 0 11.9907 1.79086 11.9907 4C11.9907 6.20914 13.7816 8 15.9907 8ZM15.9907 7C17.6476 7 18.9907 5.88071 18.9907 4.5C18.9907 3.11929 17.6476 2 15.9907 2C14.3339 2 12.9907 3.11929 12.9907 4.5C12.9907 5.88071 14.3339 7 15.9907 7Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9907 8C18.1999 8 19.9907 6.20914 19.9907 4C19.9907 1.79086 18.1999 0 15.9907 0C13.7816 0 11.9907 1.79086 11.9907 4C11.9907 6.20914 13.7816 8 15.9907 8ZM15.9907 7C17.6476 7 18.9907 5.88071 18.9907 4.5C18.9907 3.11929 17.6476 2 15.9907 2C14.3339 2 12.9907 3.11929 12.9907 4.5C12.9907 5.88071 14.3339 7 15.9907 7Z" fill="#7A7A7A"/>
<path d="M19.4963 4C19.4963 5.93606 17.9268 7.50555 15.9907 7.50555V8.49445C18.4729 8.49445 20.4852 6.48222 20.4852 4H19.4963ZM15.9907 0.494452C17.9268 0.494452 19.4963 2.06394 19.4963 4H20.4852C20.4852 1.51778 18.4729 -0.494452 15.9907 -0.494452V0.494452ZM12.4852 4C12.4852 2.06394 14.0547 0.494452 15.9907 0.494452V-0.494452C13.5085 -0.494452 11.4963 1.51778 11.4963 4H12.4852ZM15.9907 7.50555C14.0547 7.50555 12.4852 5.93606 12.4852 4H11.4963C11.4963 6.48222 13.5085 8.49445 15.9907 8.49445V7.50555ZM18.4963 4.5C18.4963 5.52705 17.4627 6.50555 15.9907 6.50555V7.49445C17.8324 7.49445 19.4852 6.23437 19.4852 4.5H18.4963ZM15.9907 2.49445C17.4627 2.49445 18.4963 3.47295 18.4963 4.5H19.4852C19.4852 2.76563 17.8324 1.50555 15.9907 1.50555V2.49445ZM13.4852 4.5C13.4852 3.47295 14.5187 2.49445 15.9907 2.49445V1.50555C14.149 1.50555 12.4963 2.76563 12.4963 4.5H13.4852ZM15.9907 6.50555C14.5187 6.50555 13.4852 5.52705 13.4852 4.5H12.4963C12.4963 6.23437 14.149 7.49445 15.9907 7.49445V6.50555Z" fill="#7A7A7A" mask="url(#path-8-inside-1_7234_3697)"/>
<path d="M6.48185 25.8948L11.1347 14.9893H20.1303L24.473 28.076H5.55127L6.48185 25.8948Z" stroke="#7A7A7A" stroke-width="1.97781" stroke-linecap="round"/>
<path d="M8.81348 9.57422H22.5154" stroke="#7A7A7A" stroke-width="1.8" stroke-linecap="round"/>
<path d="M10.7669 14.7637L9.46191 10.0254" stroke="#7A7A7A" stroke-width="1.97781" stroke-linecap="round"/>
<path d="M20.5559 14.7637L21.8608 10.0254" stroke="#7A7A7A" stroke-width="1.97781" stroke-linecap="round"/>
<path d="M3.0204 24C3.0204 24 2.68412 21.7828 4.84576 20.3021C7.0074 18.8215 10.6393 18.3279 12.9111 20.302C15.183 22.2761 14.9978 23.9993 14.9978 23.9993" stroke="#7A7A7A" stroke-width="1.8" stroke-linecap="round"/>
</svg>

                            <p className='text-[#7A7A7A] '>Maintenance staff</p>
                            <input type="checkbox" name="security" id="" className='h-[26px] w-[26px] '/>
                            </div>

                            <div className='text-center space-y-2'>
                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
<path d="M20.9001 20.4001L14.1001 13.6001" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.9308 30.4371C26.3995 30.9686 25.6789 31.2673 24.9274 31.2674C24.176 31.2675 23.4552 30.9691 22.9238 30.4379C22.3923 29.9066 22.0937 29.1859 22.0935 28.4345C22.0934 27.683 22.3918 26.9623 22.9231 26.4308L20.4198 28.9355C19.8884 29.4669 19.1675 29.7655 18.4159 29.7655C17.6643 29.7655 16.9435 29.4669 16.4121 28.9355C15.8806 28.404 15.582 27.6832 15.582 26.9316C15.582 26.18 15.8806 25.4592 16.4121 24.9277L25.4277 15.9121C25.9592 15.3806 26.68 15.082 27.4316 15.082C28.1832 15.082 28.904 15.3806 29.4355 15.9121C29.9669 16.4435 30.2655 17.1643 30.2655 17.9159C30.2655 18.6675 29.9669 19.3884 29.4355 19.9198L26.9308 22.4231C27.4623 21.8918 28.183 21.5934 28.9345 21.5935C29.6859 21.5937 30.4066 21.8923 30.9379 22.4238C31.4691 22.9552 31.7675 23.676 31.7674 24.4274C31.7673 25.1789 31.4686 25.8995 30.9371 26.4308L26.9308 30.4371Z" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.9584 30.4584L28.9751 28.4751" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.02484 5.52484L4.0415 3.5415" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.57257 18.0882C9.04111 18.6197 8.32029 18.9183 7.56869 18.9183C6.81709 18.9183 6.09628 18.6197 5.56482 18.0882C5.03336 17.5568 4.73478 16.836 4.73478 16.0844C4.73478 15.3328 5.03336 14.6119 5.56482 14.0805L8.06948 11.5772C7.80633 11.8403 7.49394 12.0489 7.15015 12.1913C6.80636 12.3336 6.4379 12.4068 6.06582 12.4068C5.31435 12.4066 4.59371 12.108 4.06244 11.5765C3.79938 11.3134 3.59073 11.001 3.4484 10.6572C3.30607 10.3134 3.23284 9.94495 3.23291 9.57286C3.23304 8.82139 3.53169 8.10076 4.06315 7.56948L8.06948 3.56315C8.60076 3.03169 9.32139 2.73304 10.0729 2.73291C10.4449 2.73284 10.8134 2.80607 11.1572 2.9484C11.501 3.09073 11.8134 3.29938 12.0765 3.56244C12.3397 3.8255 12.5484 4.13782 12.6909 4.48156C12.8333 4.8253 12.9067 5.19373 12.9068 5.56582C12.9068 5.9379 12.8336 6.30636 12.6913 6.65015C12.5489 6.99394 12.3403 7.30633 12.0772 7.56948L14.5805 5.06482C15.1119 4.53336 15.8328 4.23478 16.5844 4.23478C17.336 4.23478 18.0568 4.53336 18.5882 5.06482C19.1197 5.59628 19.4183 6.31709 19.4183 7.06869C19.4183 7.82029 19.1197 8.54111 18.5882 9.07257L9.57257 18.0882Z" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            <p className='text-[#7A7A7A] '>Property Gym</p>
                            <input type="checkbox" name="security" id="" className='h-[26px] w-[26px] '/>
                            </div>

                            

                        </div>
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

export default Features