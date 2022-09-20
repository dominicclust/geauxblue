import React, {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HowToGeauxBlue } from "./components/HowToGeauxBlue";
import { WhoWeAre } from './components/WhoWeAre';
import { Navigation } from './components/Navigation'
import { PhotoScroll } from './components/PhotoScroll'
import Home  from './components/Home'
import data from './data.json'
import './App.css'

const App = () => {
  const history = createBrowserHistory()
  let location = history.location
  const {pics, how2pics} = data;
  const [picArray, setPicArray] = useState(pics)
  useEffect(()=> {
    if(location.pathname.endsWith('howtogeauxblue')){
      setPicArray(how2pics)
    } else if (!location.pathname.endsWith('howtogeauxblue') && picArray === how2pics){
      setPicArray(pics)
    }
  }, [picArray, location, how2pics, pics])
  return (
    <div id='everything'>
      <Navigation />
      <PhotoScroll picArray={picArray} />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='whoweare' element={<WhoWeAre />} />
          <Route path='howtogeauxblue' element={<HowToGeauxBlue />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
