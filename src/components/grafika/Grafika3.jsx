import React from 'react'

const Grafika3 = () => {
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
                            <h3>Ako by mal vyzerať váš obrázok?</h3>
                            <h4 className='font-thin mt-2'>Pre čo najlepšie výsledky používajte diakritiku alebo anglický jazyk.</h4>
                        </div>
                        <div className='h-[150px]'></div>
                        <div className='flex'>
                            <h3 className='text-white text-base font-700 mr-60'>Aký formát hľadáte?</h3>
                            <h3 className='text-white text-base font-700 mb-4'>Koľko chcete vidiet výsledkov?</h3>
                        </div>
                        <div className='flex self-center justify-between w-[1000px]'>
                            <div className='w-[300px] h-[35px] flex self-center' >
                                <div className='w-20 h-8 flex justify-between pr-1 self-center border-2 border-[#14122D] rounded-lg text-white text-[8px] pl-1 mr-3'>
                                    <span className='self-center'>Štvorec</span>
                                    <div className='self-center w-6 h-6 bg-[#14122D] border rounded-sm border-white'></div>
                                </div>
                                <div className='w-24 h-8 flex justify-between pr-2 self-center bg-[#14122D] rounded-lg text-white text-[8px] pl-1 mr-3 '>
                                    <span className='self-center'>Na výšku 9:16</span>
                                    <img src="src/assets/group1413371766.svg" className='h-9 w-3 self-center' alt="" />
                                </div>
                                <div className='w-30 h-8 flex justify-between pr-1 self-center border-2 border-[#14122D] rounded-lg text-white text-[8px] pl-1'>
                                    <span className='self-center'>Na šírku 16:9</span>
                                    <img src="src/assets/group1413371771.svg" className='h-5 w-7 self-center' alt="" />
                                </div>
                            </div>
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
                        <div className='bg-white opacity-20 h-[472px] rounded-lg mt-5'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[1000px] h-[125px] my-3 pr-5 border border-[#4587F6]  rounded-lg bg-transparent absolute top-[180px] left-12' >
                <input type="text" placeholder='Sem začnite písať' className='h-full w-full bg-transparent pl-2' />
            </div>
        </div>
    )
}

export default Grafika3