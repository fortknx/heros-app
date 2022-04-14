import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen'
import DashBoardRoutes from './DashBoardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path='/login' element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    } />
                    <Route path='/*' element={
                        <PrivateRoute>
                            <DashBoardRoutes />
                        </PrivateRoute>} />
                    {/* <Route path='/*' element={<DashBoardRoutes />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter