import Max from '@/components/layout/Max'
import Logo from '@/components/ui/Logo'
import Stores from '@/components/ui/Stores'
import { FC } from 'react'



const Navbar: FC= () => {
  return <div>
    <Max>
        <nav className='h-14 flex justify-between items-center '>
           <Logo/>
          <Stores/>
        </nav>
    </Max>
  </div>
}

export default Navbar