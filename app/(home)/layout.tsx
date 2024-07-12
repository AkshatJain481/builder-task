import React from 'react'
import Navbar from './_components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
function layout({children}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
   <>
        <Navbar />
        {children}
        
    </>
  )
}

export default layout