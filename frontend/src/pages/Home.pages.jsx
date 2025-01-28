import React from 'react'
import Header from '../components/Header.components'
import SpecialityMenu from '../components/SpecialityMenu.components'
import TopDoctos from '../components/TopDoctors.components'
import Banner from '../components/Banner.components'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctos/>
      <Banner/>
    </div>
  )
}

export default Home