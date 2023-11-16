import React from 'react'

const Grafika = () => {
    return (
        <div className='relative'>
            <div className='bg-[#201D47] h-[1024px] text-white pl-12 font-inter'>
                <div className=' relative '>
                    <img src="src/assets/1.svg" alt="" className='w-600 absolute' />
                </div>
                <div>
                    <div className='w-[1000px]'>
                        <div className='flex'>
                            <div className='text-ssm  w-[380px] '>
                                <h3>AIX Logo Maker kombinuje vaše preferencie dizajnu loga s umelou inteligenciou, aby vám pomohol vytvoriť vlastné logo, ktoré si zamilujete. Stačí na to pár kliknutí. </h3>
                            </div>
                            <div className='text-ssm flex items-end pl-16'>
                                <h3 >Všetko su slepe texty...</h3>
                            </div>
                        </div>
                        <div>
                            <h3 className='pt-6 text-base font-bold' >Vytvorte si logo s AIX TOOL</h3>
                            <div className='h-[70px] w-[300px]'></div>
                        </div>
                        <div className='flex'>
                            <h3 className='pt-6 text-base font-bold' >V akom odvetví podnikáte?</h3>
                            <h3 className='pt-6 pl-48 text-base font-bold' >Koľko chcete vidiet výsledkov?</h3>
                        </div>
                        <div className='flex self-center justify-between w-[1000px]'>
                            <div className='h-[70px] w-[300px]'></div>
                            <div className='flex self-center justify-center gap-8 mr-24'>
                                <div className="p-2">1</div>
                                <div className="p-2">2</div>
                                <div className='bg-[#14122D] p-2 rounded-lg'>3</div>
                                <div className="p-2">4</div>
                                <div className="p-2">5</div>
                            </div>
                            <div >
                                <button className='bg-gradient-to-r from-[#BDF645] to-[#899221] text-base px-7 py-3 rounded-lg'>Generovať</button>
                            </div>
                        </div>
                        <div className='bg-white opacity-20 h-[595px] rounded-lg'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[300px] h-[35px] mt-3 absolute top-[110px] left-12 text-white' >
                <input type="text" placeholder='Napíšte názov spočnosti' className='border border-[#4587F6] rounded-lg h-full w-full p-2 bg-transparent' />
            </div>
            <div className='w-[300px] h-[35px] my-3 flex self-center absolute top-[215px] left-12 text-white' >
                <input type="text" placeholder='Dropdown, fulltext search' className='border border-[#4587F6] rounded-lg h-full w-full p-2 bg-transparent' />
            </div>
        </div>
    )
}

export default Grafika