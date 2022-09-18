import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import { HowToGeauxBlue } from "./components/HowToGeauxBlue";
import { WhoWeAre } from './components/WhoWeAre';
import {Navigation} from './components/Navigation'
import {PhotoScroll} from './components/PhotoScroll'
import './index.css'

export const App = () => {
  const picArray = [
    {imgSrc: 'https://i.ibb.co/kKGfDkZ/IMG-6497.jpg', imgAlt: 'lineup on Royal St.'},
    {imgSrc: 'https://i.ibb.co/kXwGjtQ/memorial.jpg', imgAlt: 'memorial'},
    {imgSrc: 'https://i.ibb.co/ryCxZNJ/interaction.jpg', imgAlt: 'engaging with community'},
    {imgSrc: 'https://i.ibb.co/ydkrMqj/ballons.jpg', imgAlt: 'in loving memory'},
    {imgSrc: 'https://i.ibb.co/wsp82L8/13920775-1223896620994745-6549726089240818833-n.jpg', imgAlt: 'passing the Geaux Blue resolution'},
    {imgSrc: 'https://i.ibb.co/0hFpRG9/12744063-982628775119921-3330669268201425599-n.jpg', imgAlt: 'when i grow up'},
    {imgSrc: 'https://i.ibb.co/GsTp4Nk/12509416-959920100724122-4762818691279067832-n.jpg', imgAlt: 'headed up Bourbon Street'},
    {imgSrc: 'https://i.ibb.co/mqJnBZL/12345416-945245888858210-7520662554174333538-n.jpg', imgAlt: 'KIPP visits the station'},
    {imgSrc: 'https://i.ibb.co/3WrgNDd/12342787-945245805524885-4352816514519978345-n.jpg', imgAlt: 'KIPP students show love for the NOPD'},
    {imgSrc: 'https://i.ibb.co/rbcRXhk/10537431-712629088786559-7436210048463158589-n.jpg', imgAlt: 'Friends of the NOPD at Friendly Bar'},
    {imgSrc: 'https://i.ibb.co/ZdBm2bv/10257009-750338508348950-5459745422217216494-o.jpg', imgAlt: 'officers, friends, and family out in the Quarter'},
    {imgSrc: 'https://i.ibb.co/BBndr3w/610-stompers.jpg', imgAlt: 'The 610 Stompers show some love for the NOPD'}
  ]

  return (
    <>
      <Navigation />
      <PhotoScroll pics={picArray} />
      <Switch>
        <Route path='/whoweare'>
          <WhoWeAre />
        </Route>
        <Route path='/howtogeauxblue'>
          <HowToGeauxBlue />
        </Route>
      </Switch>
    </>
  );
}
