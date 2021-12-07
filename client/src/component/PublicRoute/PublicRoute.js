import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PublicRoute = ({ children, ...rest }) => {
	const location = useLocation()

	console.log(rest)

	return children
	//  : <Navigate to="/login" />
}

export default PublicRoute
