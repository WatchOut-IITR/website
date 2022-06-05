import Link from 'next/link'

export default function Footer () {
    return(
        <div className='footer bg-[#00344A] text-white'>
            <div className="footer-container">
            <Link href='/'>
                <h2> Watch Out, IIT Roorkee</h2>
            </Link>
            </div>
        </div>
    )
}