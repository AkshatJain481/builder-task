"use client"
import React,{ useState } from 'react'
import Home from './_components/home'
import SellerPropertyComponent from './_components/SellerPropertyComponent'
import { ToastContainer } from 'react-toastify'

function Page() {
  const [show, setShow] = useState(false);
  const [userData , setUserData] = useState<any>(null)
  const handleSetUserData = (data:any) => {
    setUserData(data)
  }
  const handleshow = () => {
    setShow(!show);
  }
  return (
    <div>
      {!show ? <Home handleshow = {handleshow} handleSetUserData={handleSetUserData} />  
        :
      <SellerPropertyComponent handleSetUserData={handleSetUserData}  userData = {userData}/>}

      <ToastContainer />
    </div>
  )
}

export default Page