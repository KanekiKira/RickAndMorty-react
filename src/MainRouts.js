import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CharactersPage from './components/CharactersPage'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'


const MainRouts = () => {
  return (
<Routes>
    <Route path='/about' element = {<AboutPage/>}/>
    <Route path='/' element = {<HomePage/>}/>
    <Route path='/characters' element = {<CharactersPage/>}/>
 </Routes>
  )
}

export default MainRouts
