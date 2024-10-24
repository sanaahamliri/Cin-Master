import React, { useContext } from 'react';
import SideBar from '../../components/admin/sidebar/SideBar';
import Films from '../../components/admin/movies/FilmsTable';


export default function DashBoard() {

    return (
        <div className='bg-dark min-h-screen flex'>
            <SideBar />
            <div className='flex items-center justify-center h-screen w-screen'>
            <Films />
            </div>
        </div>
    );
}
