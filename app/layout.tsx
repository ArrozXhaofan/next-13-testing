import { Foo, Nav } from '@/components'
import './globals.css'
import { Rutas } from '@/models'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">

      <body className='relative min-h-screen
        font-monse'>

      <Nav  pathNames={[Rutas.HOME, Rutas.CATALOGO, Rutas.CONTACTO]} />

        <div className=' py-14'>
          {children}
        </div>
        
        <Foo/>
      
      </body>
    </html>
  )
}
