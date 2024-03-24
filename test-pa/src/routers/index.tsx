import React from 'react'
import { useRoutes } from "react-router"
import Cms from '../layout/cms'
import Actual from '../containers/actual'
import Reservation from '../containers/reservation/index';
import Period from '../containers/period';
import Login from '../containers/auth';
import Dashboard from '../containers/dashboard';

const Routers = () => {
    const routing = useRoutes([
        {
            path: '/',
            element: <Cms />,
            children: [
                {
                    path: '/',
                    element: <Dashboard />,
                },
                {
                    path: '/dashboard',
                    element: <Dashboard />,
                },
                {
                    path: '/actual-data',
                    element: <Actual />,
                },
                {
                    path: '/reservation-forecast',
                    element: <Reservation />,
                },
                {
                    path: '/period-detail',
                    element: <Period />,
                },

            ],
        },
        {
            path: '/',
            element: <Login />,
            children: [
                {
                    path: '/login',
                    element: <Login />,
                },

            ],
        },

    ])
    return routing
}

export default Routers