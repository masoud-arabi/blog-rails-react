import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import DashboardRoutes from '../../Dashboard/routes/DashboardRoutes';
import PostRoutes from '../../Post/routes/PostRoute';


const AppRouter = () => (
            <BrowserRouter>
                    
                    <PostRoutes/>
            </BrowserRouter>

    );

export default AppRouter;