import '../fake-db'
import React from 'react'
import { AllPages } from './routes/routes'
import { MatxTheme } from 'app/components'
import { useRoutes } from 'react-router-dom'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { SettingsProvider } from 'app/contexts/SettingsContext'

const App = () => {
    const all_pages = useRoutes(AllPages())

    return (
            <SettingsProvider>
                <MatxTheme><AuthProvider>{all_pages}</AuthProvider></MatxTheme>         
            </SettingsProvider>
    )
}

export default App
