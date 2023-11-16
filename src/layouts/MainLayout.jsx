import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from './../components/header/Header';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
    const location = useLocation();
    
    return (
        <div className='grid grid-cols-5 gap-0 '>
            <div className='col-span-1 row-span-5'>
                <Sidebar />
            </div>
            <div className='col-span-4 row-span-1'>
                <Header header = {location.pathname} />
            </div>
            <div className='col-span-4 row-span-4'>
                {children}
            </div>
        </div>
    )
}

export default MainLayout