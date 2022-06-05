import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/assets/icons/logo_b.svg'

export default function Header () {
    return(
        <div className='header flex'>
            <div className='head h-[104px] flex flex-row'>    
                <div className="logo-container flex grow basis-3/5">
                    <Link href='/'>
                        <div className='logo flex'>
                            <div className='logo-png p-2'>
                                {/* <img src='/assets/logo-b.svg' /> */}
                                <Image src={logo} alt='logo' className=""/>
                            </div>
                            <div className='container pl-1 pt-1.5'>
                                <h2 className='font-Raleway text-2xl'> Watch Out!</h2>
                                <h3 className='font-Lato'> The Official Media Body of IITR </h3>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='search'>
                    Search
                </div>
                <div className='subscribe font-Raleway text-[#F88D67] px-5 pt-2'>
                    Subscribe
                </div>
            </div>
            {/* <div className='navbar h-[90px]'>

            </div> */}
        </div>
    )
}