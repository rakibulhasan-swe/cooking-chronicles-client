import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    );
};

export default MainLayout;