import React, { Fragment } from 'react';
import './common/App.css';
import Header from './common/Header';
import Bgimg from './body.js';
import Footer from './common/footer.js';
import Image  from './layout/logo.js';


export default function Main(){
    return(
  <Fragment>   
    <Image/>
    <Header/>
    <Bgimg/>
    <Footer/>
    </Fragment>
    )
 
}


