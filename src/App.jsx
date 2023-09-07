import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from './pages'
import { Header } from './components'

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Header />}>
          <Route index element={<Pages.HomePage />}/>
          </Route>
      </Routes>
  )
}
