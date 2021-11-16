import React from 'react'
import STHeader from '../Layout/Header/STHeader'
 import MainSection from './MainSection/MainSection'
import MainContent from './MainSection/MainContent'
import LatestMovies from './MainSection/LatestMovies'
import SectionHero from './SectionHero'
import UpperFooter from './Footer/UpperFooter'
import LowerFooter from './Footer/LowerFooter'
import MultitudeCarousel from './Carousel.js/MultitudeCarousel'

function Layout() {
    return (
        <div>
             <STHeader/>
             <MainSection/>
             <MainContent/>
             <MultitudeCarousel/>
             <SectionHero/>
             <UpperFooter/>
             <LowerFooter/>
              
            
             {/* <LatestMovies/> */}
        </div>
    )
}

export default Layout
