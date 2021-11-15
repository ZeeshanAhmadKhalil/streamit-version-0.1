import React from 'react'
import STHeader from '../Layout/Header/STHeader'
 import MainSection from './MainSection/MainSection'
import MainContent from './MainSection/MainContent'
import LatestMovies from './MainSection/LatestMovies'
import SectionHero from './SectionHero'

function Layout() {
    return (
        <div>
             <STHeader/>
             <MainSection/>
             <MainContent/>
             <SectionHero/>
             {/* <LatestMovies/> */}
        </div>
    )
}

export default Layout
