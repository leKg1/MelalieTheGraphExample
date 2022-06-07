import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
// import { authRoles } from 'app/auth/authRoles'

// const AppEchart = Loadable(lazy(() => import('./echarts/AppEchart')))
const MelaliePerDayChart = Loadable(lazy(() => import('./echarts/MelaliePerDayChart')))
const MelaliePerWeekChart = Loadable(lazy(() => import('./echarts/MelaliePerWeekChart')))
const MelaliePerMonthChart = Loadable(lazy(() => import('./echarts/MelaliePerMonthChart')))
const MelaliePerYearChart = Loadable(lazy(() => import('./echarts/MelaliePerYearChart')))

const chartsRoute = [
    {
        path: '/charts',
        element: <MelaliePerDayChart />,
        // auth: authRoles.editor,
    },
    {
        path: '/charts/melaliePerDay',
        element: <MelaliePerDayChart />,
        // auth: authRoles.editor,
    },
    {
        path: '/charts/melaliePerWeek',
        element: <MelaliePerWeekChart />,
        // auth: authRoles.editor,
    },
    {
        path: '/charts/melaliePerMonth',
        element: <MelaliePerMonthChart />,
        // auth: authRoles.editor,
    },
    {
        path: '/charts/melaliePerYear',
        element: <MelaliePerYearChart />,
        // auth: authRoles.editor,
    },
]

export default chartsRoute
