"use client"
import React , {useState} from 'react'
import Navbar from './_components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import SellerPropertyComponent from './_components/SellerPropertyComponent'
import { ToastContainer } from 'react-toastify'
import Home from './_components/home';
function HomePage() {
    const [show, setShow] = useState(false);
  const [userData , setUserData] = useState<any>(null)
  const handleSetUserData = (data:any) => {
    setUserData(data)
  }
  const handleshow = () => {
    setShow(!show);
  }
  return (
    <>
    {!show ? <Home handleshow = {handleshow} handleSetUserData={handleSetUserData} />  
      :
    <SellerPropertyComponent handleSetUserData={handleSetUserData}  userData = {userData}/>}

      <ToastContainer />
    </>
  )
}

export default HomePage
