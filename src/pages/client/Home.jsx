import React from 'react';
import Header from '../../components/home/header';
import Movies from '../../components/home/home';


export default function HeaderHome() {

    return (
        <div className='bg-dark min-h-screen flex'>
            <Header />
            <Movies />

        </div>
    );
}
