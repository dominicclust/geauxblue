import React, {useState, useEffect} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import HowToGeauxBlue from "./components/HowToGeauxBlue";
import WhoWeAre from './components/WhoWeAre';
import Navigation from './components/Navigation'
import PhotoScroll from './components/PhotoScroll'
import Home  from './components/Home'
import Header from './components/Header';
import data from './data.json'
import './App.css'

const App = () => {
  const pics = data.pics;
  const how2pics = data.how2Pics
  const [picArray, setPicArray] = useState(pics)
  useEffect(()=> {
    if (window.location.pathname.endsWith('howtogeauxblue')) {
      setPicArray(how2pics)
    }
    return () => setPicArray(pics)
  }, [picArray, how2pics, pics])

  return (
    <div id='everything'>
      <Header />
      <Navigation />
      <PhotoScroll picArray={picArray} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='whoweare' element={<WhoWeAre />} />
            <Route path='howtogeauxblue' element={<HowToGeauxBlue />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
