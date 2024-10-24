import React, { useContext } from 'react';
import SideBar from '../../components/admin/sidebar/SideBar';
import Seances from '../../components/admin/seances/SessionsTable';


export default function DashBoard() {

    return (
        <div className='bg-dark min-h-screen flex'>
            <SideBar />
            <div className='flex items-center justify-center h-screen w-screen'>
            <Seances />
            </div>
        </div>
    );
}
