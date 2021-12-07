import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
const PrivateRoute = ({ children }) => {
	const user = useSelector((state) => state.auth.user)
	const isAuthenticated = Object.keys(user).length > 0
	const location = useLocation()

	console.log(isAuthenticated)

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location }} />
	} else return children
}

export default PrivateRoute
