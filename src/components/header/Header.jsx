import React from 'react'

const Header = ({ header }) => {

    const newHeader = header.replace("/", "");
    const toUpperCase = newHeader.charAt(0).toUpperCase() + newHeader.slice(1)
    return (
        <div className='bg-[#201D47]  text-white font-inter h-24 p-12 flex justify-between items-center'>
            <div>
                <h2 className='text-base font-black'>{header.length > 2 ? toUpperCase : "Dashboard"}</h2>
            </div>
            <div className='flex gap-6 items-center'>
                <div>
                    <img src="src/assets/dashboardTop/magnifierIcon.svg" alt="" />
                </div>
                <div className='flex gap-6'>
                    <div className='h-7 w-12 bg-gradient-to-r from-[#FF409A] to-[#C438EF] drop-shadow-ring rounded-full flex justify-center items-center gap-1'>
                        <img src="src/assets/dashboardTop/union.svg" alt="" className='w-2.5 h-3' />
                        <span>2</span>
                    </div>
                </div>
                <div className='flex'>
                    <span className='font-black text-[#50E3C2] pr-2'>320 Kreditov</span>
                    <img src="src/assets/dashboardTop/group.svg" className='h-6 w-6' alt="" />
                </div>
                <div className='flex items-center'>
                    <img src="src/assets/dashboardTop/avatar.png" className='h-10 w-10' alt="" />
                    <h4 className='px-4 text-sm'>Jozef Ačko</h4>
                    <img src="src/assets/dashboardTop/downArrow.svg" className='h-6 w-4' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header