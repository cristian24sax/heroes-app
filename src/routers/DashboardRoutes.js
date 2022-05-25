import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';
import { LandingPage } from '../components/landingPage/LandingPage';
export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DcScreen />} />
            <Route path="search" element={<SearchScreen />} />
            <Route path='hero/:heroId' element={<HeroScreen/>}/>
        </Routes>
        </div>
    
    </>
  )
}
