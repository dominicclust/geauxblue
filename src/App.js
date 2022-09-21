import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import HowToGeauxBlue from "./components/HowToGeauxBlue";
import WhoWeAre from './components/WhoWeAre';
import Navigation from './components/Navigation'
import PhotoScroll from './components/PhotoScroll'
import Home  from './components/Home'
import Header from './components/Header';
import pics from './pics.json'
import how2pics from './how2pics.json'
import './App.css'

const App = () => {
  const [picArray, setPicArray] = useState(pics.pics)
  useEffect(()=> {
    window.onload(() => {
      if (window.location.href.endsWith('howtogeauxblue')) {
        setPicArray(how2pics.pics)
      }
    })
    return () => setPicArray(pics)
  }, [picArray])

  return (
    <div id='everything'>
      <Header />
      <Navigation />
      <PhotoScroll picArray={picArray} />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/whoweare' element={<WhoWeAre />} />
          <Route path='/howtogeauxblue' element={<HowToGeauxBlue />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
