import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header'
import Dashboard from '../pages/main/Dashboard'
import NotFound from '../pages/NotFound'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Header isPublic={false} />
      <Route path='/' element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default PrivateRoutes