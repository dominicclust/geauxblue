import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {createBrowserHistory} from 'history'
import HowToGeauxBlue from "./components/HowToGeauxBlue";
import WhoWeAre from './components/WhoWeAre';
import Navigation from './components/Navigation';
import PhotoScroll from './components/PhotoScroll'
import Home  from './components/Home'
import Header from './components/Header';
import pics from './pics.json'
import how2pics from './how2pics.json'
import './App.css'
import PressRelease from './components/PressRelease';

const App = () => {
  const history = createBrowserHistory()
  const [picArray, setPicArray] = useState(pics.pics)
  const location = history.location
  const handleClick = () => {
    this.addEventListener('click', () => {
      history.push(location)
    })
    if (history[history.length - 1].endsWith('howtogeauxblue')) {
      setPicArray(how2pics.pics)
    } else {
      setPicArray(pics.pics)
    } 

    return () => this.removeEventListener('click')
  }

  return (
    <div id='everything'>
      <Header />
      <Navigation handleClick={handleClick} />
      <PhotoScroll picArray={picArray} />
      <Routes>
        <Route path='/' end element={<Home />} />
        <Route path='whoweare' element={<WhoWeAre />} />
        <Route path='howtogeauxblue' element={<HowToGeauxBlue />} />
        <Route path='press' element={<PressRelease />} />
      </Routes>
    </div>
  );
}
export default App;
