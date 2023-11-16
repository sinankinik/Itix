import React from 'react'
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Routes } from 'react-router-dom';
import Grafika from './components/grafika/Grafika';
import Penazenka from './components/penazenka/Penazenka';
import Copywrite from './components/copywrite/Copywrite';
import Grafika2 from './components/grafika/Grafika2';
import Grafika3 from './components/grafika/Grafika3';
import Grafika4 from './components/grafika/Grafika4';
import Copywrite2 from './components/copywrite/Copywrite2';
import AIKonzultacie from './components/aIkonzultacie/AIKonzultacie';



export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/kreativa' element={<Grafika />} />
      <Route path='/kreativa2' element={<Grafika2 />} />
      <Route path='/kreativa3' element={<Grafika3 />} />
      <Route path='/kreativa4' element={<Grafika4 />} />
      <Route path='/penazenka' element={<Penazenka />} />
      <Route path='/copywrite' element={<Copywrite />} />
      <Route path='/copywrite2' element={<Copywrite2 />} />
      <Route path='/AIKonzultacie' element={<AIKonzultacie />} />
    </Routes>
  )
}