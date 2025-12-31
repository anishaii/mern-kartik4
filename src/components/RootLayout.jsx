import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Card from './Card'
import { FaCss3 } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { SlDiamond } from "react-icons/sl";
import Color from './Color';

const RootLayout = () => {
  return (
    <div>
        <Header />
        <Outlet/>
        <div className='grid grid-cols-3 gap-1'>

        <Card 
        title={'Responsive'}
        icon={<HiMiniComputerDesktop size={100}/>}
        description={["Built-in responsiveness",

            "Mobile first fluid grid",

            "Fits any screen sizes",

            "PC Tablet and Mobile"]}
        />

        <Card 
        title={'CSS Standard'}
        icon={<FaCss3 size={100}/>}
        description={["Built-in responsiveness",

            "Mobile first fluid grid",

            "Fits any screen sizes",

            "PC Tablet and Mobile"]}
        />

          <Card 
        title={'CSS Standard'}
        icon={<SlDiamond size={100}/>}
        description={["Paper like design",

            "Bold colors and shadows",

            "Equal across platforms",

            "Equal across devices",]}
        />

        </div>

        <div>
          <Color
          titles={'Color'}

          />
        </div>
    
      
    </div>
  )
}

export default RootLayout
