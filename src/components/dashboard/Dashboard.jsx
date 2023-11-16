import React from 'react'

const Dashboard = () => {
    return (
        <div className='bg-[#201D47] h-[570px] text-white relative'>
            <div className='absolute'>
                <img src="src/assets/1.svg" alt="" className='w-[600px] top-[0px] left[-300]' />
            </div>
            <div>
                <div className='h-[570px] px-12 pt-6'>
                    <div className='bg-[#262353] rounded-xl w-80'>
                        <div className='relative'>
                            <h3 className='text-xs font-fira font-bold p-6 text-[#B1AFCD]'>NOTIFICATIONS</h3>
                            <div className='py-3 pl-6 flex hover:bg-[#1A173E]'>
                                <div>
                                    <img src="src/assets/dashboardTop/avatar.png" alt="" className='h-9 w-9' />
                                </div>
                                <div className='font-fira pl-3'>
                                    <h2 className='font-bold text-sm pb-1'>Jozef Ačko</h2>
                                    <h3 className='font-inter text-xs pb-1'>240 Znakov</h3>
                                    <h4 className='text-[#59588D] text-xs'>2 hours ago</h4>
                                </div>
                                <div>
                                    <h4 className='text-[#75749C] text-xs pl-4'>Copywrite</h4>
                                </div>
                            </div>
                            <div className='flex py-3 pl-6 hover:bg-[#1A173E] cursor-pointer'>
                                <div>
                                    <img src="src/assets/dashboardTop/avatar.png" alt="" className='h-9 w-9' />
                                </div>
                                <div className='font-fira pl-3 '>
                                    <h2 className='font-bold text-sm pb-1'>Jozef Ačko</h2>
                                    <h3 className='font-inter text-xs pb-1'>240 Znakov</h3>
                                    <h4 className='text-[#59588D] text-xs'>2 hours ago</h4>
                                </div>
                                <div>
                                    <h4 className='text-[#75749C] text-xs pl-4'>Copywrite</h4>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-[#70B2FF] text-xs text-center py-3'>See All</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard