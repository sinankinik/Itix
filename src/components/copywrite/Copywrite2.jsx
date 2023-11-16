import React from 'react'

const Copywrite2 = () => {
    return (
        <div className='relative'>
            <div className='bg-[#201D47] h-[1024px] text-white pl-12 font-inter'>
                <div className=' relative'>
                    <img src="src/assets/1.svg" alt="" className='w-600 absolute top-64' />
                </div>
                <div>
                    <div className='w-[1000px]'>
                        <div className='flex'>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-[#07101E] rounded-lg text-base h-[50px] w-[131px] px-2 py-3'>+ Nový blok</button>
                        </div>
                        <div className='w-[1000px] border-b border-[#3BA3DD]'>
                            <button className='bg-[#07101E] border border-[#3BA3DD] rounded-lg text-base h-[50px] w-[155px] px-2 py-3 mx-3'>Claim pre firmu</button>
                            <button className='bg-[#14122D] rounded-lg text-base h-[50px] w-[124px] px-2 py-3 mx-2'><span className='opacity-[.15]'>Cuba Libre x</span></button>
                            <button className='bg-[#14122D] rounded-lg text-base h-[50px] w-[124px] px-2 '><span className='opacity-[.15]'>Mojito x</span></button>
                        </div>
                        <div className='py-3'>
                            <h3>Pre čo najlepšie výsledky používajte diakritiku alebo anglický jazyk.</h3>
                        </div>
                        <div className='bg-[#413f62] h-[673px] rounded-lg text-black'>
                            <div className='p-5 flex'>
                                <div className='h-[39px] w-[39px]  bg-white rounded-full'></div>
                                <div className='ml-5' >
                                    <input type="text" className='block h-[13px] w-[807px] mb-1'/>
                                    <input type="text" className='block h-[13px] w-[393px]'/>
                                </div>
                            </div>
                            <div className='p-5 flex bg-[#454463]'>
                                <div className='h-[39px] w-[39px]  bg-white rounded-full'></div>
                                <div className='ml-5' >
                                    <input type="text" className='block h-[13px] w-[586px] mb-1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[1000px] h-[35px] my-3 flex justify-between items-center pr-5 self-center border border-[#4587F6] rounded-lg bg-transparent absolute top-[830px] left-12' >
                <input type="text" placeholder='Krátky slogan pre firmu v drevopriemysle' className='h-full w-11/12 bg-transparent pl-4' />
                <img src="src/assets/group1413371764.svg" className='h-3 w-3' alt="" />
            </div>
        </div>
    )
}

export default Copywrite2