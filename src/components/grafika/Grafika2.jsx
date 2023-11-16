import React from 'react'

const Grafika2 = () => {
    return (
        <div className='bg-[#201D47] h-[570px] text-white pl-12 font-inter text-base'>
            <div className=' relative '>
                <img src="src/assets/1.svg" alt="" className='w-600 absolute' />
            </div>
            <div className='flex'>
                <h3 className='font-bold mr-16'>Vyberte si z možností čo vám pomôžeme vyrobiť.</h3>
                <h3>Slepý text, vymysliet headline</h3>
            </div>
            <div className='mt-10'>
                <button className='bg-gradient-to-r from-[#4945F6] to-[#214092] rounded-lg w-[145px] h-[54px] mr-8'>Banner</button>
                <button className='bg-gradient-to-r from-[#4945F6] to-[#214092] rounded-lg w-[145px] h-[54px]'>Logo</button>
            </div>
        </div>
    )
}

export default Grafika2