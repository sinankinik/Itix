import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='w-full h-full bg-gradient-to-b from-sidebar0 to-sidebar1'>
            <div className='flex leading-sidebar pt-10 pl-12'>
                <div>
                    <img src="src/assets/logo.svg" alt="" className='mr-4' height={29} width={29} />
                </div>
                <div className='flex height={27} width={155} text-lg text-white font-montserrat'>
                    <h2 className=' font-extrabold mr-2'>AIX</h2>
                    <h2>AI TOOLS</h2>
                </div>
            </div>
            <div className='text-white font-inter pt-7 pl-16 '>
                <div>
                    <div className='flex gap-7 my-6 pl-1'>
                        <img src="src/assets/menuIcons/menuIcon1.svg" className='' height={13} width={16} alt="" />
                        <h3 className='text-sm'><Link to="/">Dashboard</Link></h3>
                    </div>
                    <div className='flex gap-7 my-6 pl-1'>
                        <img src="src/assets/menuIcons/menuIcon2-1.svg" height={13} width={16} alt="" />
                        <h3 className='text-sm'><Link to="/kreativa">Grafika</Link></h3>
                    </div>
                    <div className='flex gap-6 my-6'>
                        <img src="src/assets/menuIcons/menuIcon3.svg" height={18} width={22} alt="" />
                        <h3 className='text-sm'><Link to="/copywrite">Copywrite</Link></h3>
                        <div className='bg-[#FF40A5] ml-10 rounded-full h-[6px] w-[6px] self-center'>
                            <img src="src/assets/menuIcons/notifeMark.svg" alt="" />
                        </div>
                    </div>
                    <div className='flex gap-6 my-6'>
                        <img src="src/assets/menuIcons/menuIcon4.svg" height={20} width={22} alt="" />
                        <h3 className='text-sm'><Link to="/AIKonzultacie">AI Konzultácia</Link></h3>
                    </div>
                    <div className='flex gap-6 my-6' >
                        <img src="src/assets/menuIcons/menuIcon5.svg" height={18} width={22} alt="" />
                        <h3 className='text-sm'><Link to="/penazenka">Prekladač</Link></h3>
                    </div>
                    <div className='mt-60 ml-[180px]'>
                        <img src="src/assets/menuIcons/menuCollapseIcon.svg" height={13} width={9.5} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar