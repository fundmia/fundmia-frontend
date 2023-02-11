import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/auth/Landing'
import SignIn from '../pages/auth/SignIn'
import Register from '../pages/auth/Register'
import ForgotPassword from '../pages/auth/ForgotPassword'
import NotFound from '../pages/NotFound'


const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}

export default PrivateRoutes