import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screen/HomeScreen'
import ListUser from './screen/ListUser'
import Latihan from './screen/Latihan'
import DetailUser from './screen/DetailUser'
import AddUser from './screen/AddUser'
import EditUser from './screen/EditUser'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/listuser' element={<ListUser/>} />
      <Route path='/latihan' element={<Latihan/>}/>
      <Route path='/detailuser' element={<DetailUser/>} />
      <Route path='/adduser' element={<AddUser/>} />
      <Route path='/edituser' element={<EditUser/>} />
    </Routes>
  )
}

export default App