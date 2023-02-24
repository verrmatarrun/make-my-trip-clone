import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Login from "./Login/Login";

import Master from "./Flight/Master";
import MasterTrain from "./Train/MasterTrain";
import MasterHotel from "./Hotel/MasterHotel";
import Header from "./Header/Header";
import Checkout from "./CheckOut/Checkout";

const App = () => {
  return (
    // <BrowserRouter>
    //   <div id='main'>
    //     <Routes>
    //       <Route
    //         path='/Master'
    //         element={
    //           <Master modal2Open={modal2Open} setModal2Open={setModal2Open} />
    //         }
    //       />
    //       <Route path='/' element={<Login />} />
    //       <Route
    //         path='/checkout'
    //         element={
    //           <Modals modal2Open={modal2Open} setModal2Open={setModal2Open} />
    //         }
    //       />
    //       <Route
    //         path='/hotels'
    //         element={
    //           <MasterHotel
    //             modal2Open={modal2Open}
    //             setModal2Open={setModal2Open}
    //           />
    //         }
    //       />
    //       <Route path='/trains' element={<MasterTrain />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    // <MasterHotel />
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Master />} />
        <Route exact path='/masterTrain' element={<MasterTrain />} />
        <Route exact path='/masterHotel' element={<MasterHotel />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
