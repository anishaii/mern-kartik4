
import { Outlet } from 'react-router'
import Header from './Header'


const RootLayout = () => {
    

  return (
    <div className="min-h-screen bg-[#1E1B17]">
        <Header />
        <Outlet/>
      
    
      
    </div>
  )
}

export default RootLayout
