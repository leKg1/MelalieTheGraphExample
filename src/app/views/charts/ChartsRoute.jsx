import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from 'app/auth/authRoles'

const AppEchart = Loadable(lazy(() => import('./echarts/AppEchart')))
const AppStakesCreatedPerDayChart = Loadable(lazy(() => import('./echarts/AppStakesCreatedPerDayChart')))
const AppStakesCreatedPerWeekChart = Loadable(lazy(() => import('./echarts/AppStakesCreatedPerWeekChart')))
const AppStakesCreatedPerMonthChart = Loadable(lazy(() => import('./echarts/AppStakesCreatedPerMonthChart')))
const AppStakesCreatedPerYearChart = Loadable(lazy(() => import('./echarts/AppStakesCreatedPerYearChart')))

const chartsRoute = [
    {
        path: '/charts',
        element: <AppStakesCreatedPerDayChart />,
        auth: authRoles.editor,
    },
    {
        path: '/charts/stakesCreatedPerDay',
        element: <AppStakesCreatedPerDayChart />,
        auth: authRoles.editor,
    },
    {
        path: '/charts/stakesCreatedPerWeek',
        element: <AppStakesCreatedPerWeekChart />,
        auth: authRoles.editor,
    },
    {
        path: '/charts/stakesCreatedPerMonth',
        element: <AppStakesCreatedPerMonthChart />,
        auth: authRoles.editor,
    },
    {
        path: '/charts/stakesCreatedPerYear',
        element: <AppStakesCreatedPerYearChart />,
        auth: authRoles.editor,
    },
]

export default chartsRoute
