import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import HowToGeauxBlue from "./components/HowToGeauxBlue";
import WhoWeAre from './components/WhoWeAre';
import PhotoScroll from './components/PhotoScroll'
import Home  from './components/Home'
import Header from './components/Header';
import pics from './pics.json'
import how2pics from './how2pics.json'
import './App.css'

const App = () => {
  const [picArray, setPicArray] = useState(pics.pics)
  useEffect(()=> {
    if ((window.location.href.endsWith('howtogeauxblue') 
    && picArray.includes(how2pics.pics[0]))
    || (!window.location.href.endsWith('howtogeauxblue') 
    && picArray.includes(pics.pics[0]))) return;

    window.location.href.endsWith('howtogeauxblue')
      ? setPicArray(how2pics.pics)
      : setPicArray(pics.pics)
  }, [picArray])
  return (
    <div id='everything'>
      <Header />
      <PhotoScroll picArray={picArray} />
      <Routes>
        <Route path='/' end element={<Home />}/>
        <Route path='whoweare' element={<WhoWeAre />} />
        <Route path='howtogeauxblue' element={<HowToGeauxBlue />} />
      </Routes>
    </div>
  );
}
export default App;
