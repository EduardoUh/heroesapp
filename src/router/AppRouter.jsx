import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }
                />
                {/* 
                    We check if the user is athenticated in the PrivateRoute component and if it is
                    user will have access to the HeroesRoutes and if not user will be redirected to
                    the LoginPage component
                */}
                <Route path='/*' element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>}
                />
            </Routes>
        </>
    )
}
