import React from 'react'

const Penazenka = () => {
    return (
        <div className='bg-[#201D47] h-[1024px] text-white pl-12 font-inter'>
            <div className=' relative '>
                <img src="src/assets/1.svg" alt="" className='w-600 absolute' />
            </div>
            <div className='grid grid-cols-3 pr-[118px]'>
                <div className='col-span-1 px-0'>
                    <h3 className='text-2xl font-poppin'>Aktuálny zostatok</h3>
                    <div className='flex'>
                        <h3 className='text-lg text-[#B6B1C8] font-jost pt-10'>320 Kreditov</h3>
                        <div className='pt-10 pl-4'>
                            <img src="src/assets/dashboardTop/group.svg" className='h-6 w-6' alt="" />
                        </div>
                    </div>
                </div>
                <div className='col-span-1 h-96 pl-0'>
                    <h3 className='text-2xl font-poppin'>Zakúpený plán</h3>
                    <h3 className='text-lg text-[#B6B1C8] font-jost pt-10'>Basic plan</h3>
                    <h3 className='text-sm text-[#B6B1C8] font-jost pt-6 pr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum blandit eros, vel auctor neque sodales ac. Nulla tristique ante justo, sit amet lobortis dolor consectetur id.</h3>
                    <div className='flex'>
                        <h3 className='text-[64px] text-white font-jost pt-2'>159</h3>
                        <h3 className='text-xl pt-8 font-jost'>€</h3>
                        <h3 className='text-sm pt-12 pl-2 text-[#B6B1C8] font-jost'>per month</h3>
                    </div>
                    <div className='text-[#B6B1C8] pt-2'>
                        <h3 className='text-lg font-jost '>Information</h3>
                        <div className='flex pt-2 '>
                            <img src="src/assets/vector.svg" alt="" className='h-3.5 w-3.5' />
                            <h4 className='text-xs font-jost pl-2 text-[#B6B1C8]'>lorem ipsum dolor sit</h4>
                        </div>
                        <div className='flex pt-2 '>
                            <img src="src/assets/vector.svg" alt="" className='h-3.5 w-3.5' />
                            <h4 className='text-sm pl-2 font-jost text-[#B6B1C8]'>consectetur adipiscing elit</h4>
                        </div>
                        <div className='flex pt-2 '>
                            <img src="src/assets/vector.svg" alt="" className='h-3.5 w-3.5' />
                            <h4 className='text-xs pl-2 font-jost text-[#B6B1C8]'>lorem ipsum dolor sit</h4>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 h-96 border-l border-[#50E3C2] pl-6'>
                    <h3 className='text-2xl font-poppin'>Máte záujem o upgrade?</h3>
                    <h3 className='text-lg text-[#B6B1C8] font-jost pt-10'>1500 otázok</h3>
                    <h3 className='text-sm text-[#B6B1C8] font-jost pt-6 pr-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum blandit eros, vel auctor neque sodales ac. Nulla tristique ante justo, sit amet lobortis dolor consectetur id.</h3>
                    <div className='flex border-b border-[#50E3C2] relative'>
                        <h3 className='text-[64px] text-white font-jost pt-2 '>99</h3>
                        <h3 className='text-xl pt-8 font-jost'>€</h3>
                        <h3 className='text-sm pt-12 pl-2 text-[#B6B1C8] font-jost'>jednorázovo</h3>
                        <img src="src/assets/ellipse1407.svg" alt="" className='w-[18px] top-24 left-10 absolute' />
                    </div>
                    <div>
                        <button className='w-[300px] h-[54px] bg-gradient-to-r from-[#BDF645] to-[#899221] mt-20 rounded-lg'>Kúpiť</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Penazenka