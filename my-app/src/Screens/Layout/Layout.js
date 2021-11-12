import React from 'react'
import STHeader from '../Layout/Header/STHeader'
import MainSection from './MainSection/MainSection'
import MainContent from './MainSection/MainContent'

function Layout() {
    return (
        <div>
             <STHeader/>
             <MainSection className="main-section-class"/>
             <MainContent/> 
        </div>
    )
}

export default Layout
