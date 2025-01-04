import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <section className='bg-gray-800 sticky top-0 z-50'>
                <Navbar></Navbar>
            </section>
            <section className='max-w-screen-xl mx-auto'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;