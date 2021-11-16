import React, { useEffect } from 'react'
import CustomerLayout from '../../../component/customer/CustomerLayout/CustomerLayout'
import Banner from '../../../component/customer/Banner/Banner'
import Category from '../../../component/customer/Category/Category'
import LastestProducts from '../../../component/customer/LatestProducts/LatestProducts'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../component/admin/Sidebar/Sidebar'
import Header from '../../../component/admin/Header/Header'

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Helmet>
				<title>Reno - Home</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<Banner />
				<Category />
				<LastestProducts />
			</CustomerLayout>
			<Outlet />
		</>
	)
}

export default Home
