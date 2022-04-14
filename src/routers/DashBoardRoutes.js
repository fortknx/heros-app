import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/ui/NavBar'
import MarvelScreen from '../components/marvel/MarvelScreen'
import DcScreen from '../components/dc/DcScreen'
import SearchScreen from '../components/search/SearchScreen'
import HeroScreen from '../components/heros/HeroScreen'
import HomeScreen from '../components/home/HomeScreen'

const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='dc' element={<DcScreen />} />
                    <Route path='marvel' element={<MarvelScreen />} />
                    <Route path='hero/:heroId' element={<HeroScreen />} />

                    <Route path='search' element={<SearchScreen />} />

                    <Route path='/' element={<HomeScreen />} />
                </Routes>
            </div>
        </>
    )
}

export default DashBoardRoutes