import Link from 'next/link'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isAppended, setIsAppended] = useState(false)
    useEffect(() => {
        console.log(isAppended)
    }, [isAppended])
    return ( 
        <>
        <div className="p-5 absolute z-40 lg:hidden sm:block">
            <div onClick={() => setIsAppended(!isAppended)} className={`hamburger  hamburger--elastic-r ${isAppended ? 'is-active' : ''}`}>
                <div className="hamburger-box">
                    <div className="hamburger-inner bg-gray-600"></div>
                </div>
            </div>
        </div>
        <nav className={`absolute z-10 w-full lg:block text-center ${isAppended ? 'is--appended' : 'is--collapsed' }`}>
            <ul className="flex lg:flex-row flex-col flex-initial text-sm mx-auto justify-center w-full pt-24 lg:pt-10 capitalize " onClick={() => setIsAppended(!isAppended)}>
                <Link href="/"><a><li className="cursor-pointer lg:px-6 font-medium neu-light lg:rounded-l-full p-5 lg:py-4 hover:text-indigo-500" id="contactbtn">Home</li></a></Link>
                <Link href="/insights"><a><li className="cursor-pointer focus:outline-none font-medium neu-light lg:px-6 lg:py-4 p-5 hover:text-indigo-500" id="insightsbtn">Insights</li></a></Link>
                <Link href="/excos"><a><li className="cursor-pointer lg:px-6 font-medium neu-light lg:py-4 p-5 hover:text-indigo-500" id="gallerybtn">Excos</li></a></Link>
                <Link href="/gallery"><a><li className="cursor-pointer lg:px-6 font-medium neu-light lg:py-4 p-5 hover:text-indigo-500" id="gallerybtn">Gallery</li></a></Link>
                <Link href="/donate"><a><li className="cursor-pointer lg:px-6 font-medium neu-light lg:py-4 p-5 hover:text-indigo-500" id="donatebtn">Donate</li></a></Link>
                <Link href="/contact"><a><li className="cursor-pointer lg:px-6 font-medium neu-light lg:rounded-r-full p-5 lg:py-4 hover:text-indigo-500" id="contactbtn">Contact</li></a></Link>
            </ul>
        </nav>
      </>
     );
}
 
export default Navbar;