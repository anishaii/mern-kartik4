import React from 'react'
import Header from './Header.jsx'
import { Outlet } from 'react-router'


const Rootlayout = () => {
  return (
    <div>
      <Header/>
      <main className='p-5'>
        <Outlet/>
      </main>
      
    </div>
  )
}

export default Rootlayout
