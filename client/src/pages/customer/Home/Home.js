import React from 'react'
import CustomerLayout from '../../../component/customer/CustomerLayout/CustomerLayout'
import Banner from '../../../component/customer/Banner/Banner'
import Category from '../../../component/customer/Category/Category'
import LastestProducts from '../../../component/customer/LatestProducts/LatestProducts'

const Home = () => {
	return (
		<>
			<CustomerLayout>
				<Banner />
				<Category />
				<LastestProducts />
			</CustomerLayout>
		</>
	)
}

export default Home
