import React, { useContext } from 'react';
import SideBar from '../../components/admin/sidebar/SideBar';
import Statistic from '../../components/admin/Dahsboard/overView';

export default function DashBoard() {

    return (
        <div className='bg-dark min-h-screen flex'>
            <SideBar />
            <div>
              <Statistic />
            </div>
        </div>
    );
}
