"use client"
import React, {useState} from 'react'
import PropertyDetails from './PropertyDetails'
import LocationDetails from './LocationDetails'
import Features from './Features'
import PriceDetails from './PriceDetails'
import PropertyImages from './PropertyImages'

function SellerPropertyComponent({handleSetUserData, userData}: {handleSetUserData: (data: any) =>void, userData: any}) {
      const [currentStep, setCurrentStep] = useState<number>(1);
      
        const nextStep = (isFormComplete : boolean) => {
          if (isFormComplete) {
            setCurrentStep(prevStep => prevStep + 1);
          }
        };
  return (
<section className='flex justify-center  '>
    <div className='mt-[50px] rounded-xl shadow-lg'>
        <ul className='flex justify-evenly h-[80px] bg-[#FCF8F4] rounded-t-xl '>
            <li className={ `text-[#7A7A7A] py-4 text-center w-[195px] border-b-[8px]  ${currentStep > 1 ? "border-[#122B49]" : "border-[#D6D6D6]"} `}
            >PROPERTY <br /> DETAILS</li>
            <li className={ `text-[#7A7A7A] py-4 text-center w-[195px] border-b-[8px]  ${currentStep > 2 ? "border-[#122B49]" : "border-[#D6D6D6]"} `}
            >LOCATION <br />  DETAILS</li>
            <li className={ `text-[#7A7A7A] py-4 text-center w-[195px] border-b-[8px]  ${currentStep > 3 ? "border-[#122B49]" : "border-[#D6D6D6]"} `}
            >FEATURES & <br /> AMENITIES</li>
            <li className={ `text-[#7A7A7A] py-4 text-center w-[195px] border-b-[8px]  ${currentStep > 4 ? "border-[#122B49]" : "border-[#D6D6D6]"} `}
            >PRICE DETAILS</li>
            <li className={ `text-[#7A7A7A] py-4 text-center w-[195px] border-b-[8px]  ${currentStep > 5 ? "border-[#122B49]" : "border-[#D6D6D6]"} `}
            >PROPERTY <br /> IMAGES</li>

        </ul>
        {currentStep === 1 && <PropertyDetails nextStep={nextStep} userData = {userData} handleSetUserData = {handleSetUserData} />}
        {currentStep === 2 && <LocationDetails nextStep={nextStep} userData = {userData} handleSetUserData={handleSetUserData}/>}
        {currentStep === 3 && <Features nextStep={nextStep} userData = {userData} handleSetUserData={handleSetUserData}/>}
        {currentStep === 4 && <PriceDetails nextStep={nextStep} userData= {userData} handleSetUserData={handleSetUserData}/>}
        {currentStep === 5 &&<PropertyImages nextStep={nextStep} userData={userData} handleSetUserData={handleSetUserData}/>}
        
    </div>
</section>
)
}

export default SellerPropertyComponent