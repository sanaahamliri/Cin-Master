import React, { useContext } from 'react';
import SideBar from '../../components/admin/sidebar/SideBar';

export default function DashBoard() {

    return (
        <div className='bg-dark min-h-screen flex'>
            <SideBar />
            <div>
              Dashboard
            </div>
        </div>
    );
}
