
import { Outlet } from 'react-router'
import Header from './Header'


const RootLayout = () => {
    

  return (
    <div className="min-h-screen">
        <Header />
        <main className='p-5'>
           <Outlet/>
        </main>
       
      
    
      
    </div>
  )
}

export default RootLayout
