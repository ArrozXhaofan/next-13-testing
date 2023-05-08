import Image from 'next/image'
import Logo from '../../public/images/maxLogo.png'
import Link from 'next/link'
import { Ruta } from '@/models'

interface Props{
    pathNames: Ruta[]
}

function Nav({pathNames}:Props) {
  return (
    <nav data-aos="fade-left" 
    className='fixed w-full h-14 bg-white bg-opacity-75 flex items-center justify-between pr-4'>
        
        <div className=''>
            <Image className='h-10 object-contain' priority
            src={Logo} width={100} height={75} alt='Logo de max' />
        </div>

        <div className='flex items-center gap-3 text-black text-sm'>
            {
                pathNames.map(pathName => (
                    <Link key={pathName.path} href={pathName.path}>
                        {pathName.name}
                    </Link>
                ))
            }
        </div>

    </nav>
  )
}

export default Nav