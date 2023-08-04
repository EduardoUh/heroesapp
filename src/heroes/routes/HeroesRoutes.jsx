import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, NotFound } from '../../ui/components';
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../';


export const HeroesRoutes = () => {
    return (
        <>
            <div className="container">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Navigate to='/marvel' />} />
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />
                    <Route path='search' element={<SearchPage />} />
                    <Route path='hero/:id' element={<HeroPage />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}
