import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const Index = () => {
    return (
        <Router>
                {
                    true ?
                        <PublicRoutes />
                        :
                        <PrivateRoutes />
                }
        </Router>
    )
}

export default Index