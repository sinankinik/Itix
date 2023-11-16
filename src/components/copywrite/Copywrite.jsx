import React from 'react'

const Copywrite = () => {
    return (
        <div className='relative'>
            <div className='bg-[#201D47] h-[1024px] text-white pl-12 font-inter'>
                <div className=' relative '>
                    <img src="src/assets/1.svg" alt="" className='w-600 absolute' />
                </div>
                <div>
                    <div className='w-[1000px]'>
                        <div className='flex'>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-[#07101E] rounded-lg text-base h-[50px] w-[131px] px-2 py-3'>+ Nový blok</button>
                        </div>
                        <div className='w-[1000px] border-b border-[#3BA3DD]'>
                            <button className='bg-[#07101E] border border-[#3BA3DD] rounded-lg text-base h-[50px] w-[182px] px-2 py-3'>Pomenujte si kartu</button>
                        </div>
                        <div className='py-3'>
                            <h3>Pre čo najlepšie výsledky používajte diakritiku alebo anglický jazyk.</h3>
                        </div>
                        <div className='bg-white opacity-20 h-[673px] rounded-lg'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[1000px] h-[35px] my-3 flex justify-between items-center pr-5 self-center border border-[#4587F6] rounded-lg bg-transparent absolute top-[830px] left-12' >
                <input type="text" placeholder='Sem začnite písať' className='h-full w-11/12 bg-transparent pl-4' />
                <img src="src/assets/group1413371764.svg" className='h-3 w-3' alt="" />
            </div>
        </div>
    )
}

export default Copywrite