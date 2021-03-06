// import AuthGuard from 'app/auth/AuthGuard'
import NotFound from 'app/views/sessions/NotFound'
import chartsRoute from 'app/views/charts/ChartsRoute'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'

export const AllPages = () => {
    const all_routes = [
        {
            element: (  <MatxLayout />            ),
            children: [ ...chartsRoute, ...materialRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="charts/melaliePerDay" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
