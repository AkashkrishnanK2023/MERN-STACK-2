import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './FunctionComponent/Navbar';
import Home from './FunctionComponent/Home';
import About from './FunctionComponent/About';
import Contact from './FunctionComponent/Contact';
import Signup from './FunctionComponent/Signup';
import Gallery from './FunctionComponent/Gallery';
import Login from './FunctionComponent/Login';
import UseState from './FunctionComponent/Hooks/UseState';
import UseEffect from './FunctionComponent/Hooks/UseEffect';
import UseEffectAPI from './FunctionComponent/Hooks/UseEffectAPI';
import UseEffectAPIimage from './FunctionComponent/Hooks/UseEffectAPIimage';
import UseRef from './FunctionComponent/Hooks/UseRef';
import UseMemo from './FunctionComponent/Hooks/UseMemo';
import UseCallback from './FunctionComponent/Hooks/UseCallback';
import ReactLifecycleMethods from './component/ReactLifecycleMethod';
import Student from './FunctionComponent/Hooks/Student';
import Memo from './FunctionComponent/Memorization/Memo';
import LazyLoadingWithSuspense from './FunctionComponent/Memorization/LazyLoadingWithSuspense';
import UseLocalStorage from './FunctionComponent/Hooks/UseLocalStorage';
import Hoc from './FunctionComponent/ContextComponent/Hoc';





function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UseState" element={<UseState/>} />
        <Route path="/UseEffect" element={<UseEffect/>} />
        <Route path="/UseEffectAPI" element={<UseEffectAPI/>} />
        <Route path="/UseEffectAPIimage" element={<UseEffectAPIimage/>}></Route>
        <Route path="/UseRef" element={<UseRef/>}></Route>
        <Route path="/UseMemo" element={<UseMemo/>}></Route>
        <Route path="/UseCallback" element={<UseCallback/>}></Route>
        <Route path="/ReactLifecycleMethod" element={<ReactLifecycleMethods/>}></Route>
        <Route path="/Student" element={<Student/>}></Route>
        <Route path="/Memo" element={<Memo/>}></Route>
        <Route path="/LazyLoadingWithSuspense" element={<LazyLoadingWithSuspense/>}></Route>
        <Route path='/UseLocalStorage' element={<UseLocalStorage/>}></Route>
        <Route path='/Hoc' element={<Hoc/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;