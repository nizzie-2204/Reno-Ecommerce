import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import CustomerLayout from '../../component/customer/CustomerLayout/CustomerLayout'
import ForgotPasswordForm from '../../component/customer/ForgotPasswordForm/ForgotPasswordForm'
import ResetPasswordForm from '../../component/customer/ResetPasswordForm/ResetPasswordForm'
const ResetPassword = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Helmet>
				<title>Reno - Reset Password</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<ResetPasswordForm />
			</CustomerLayout>
		</>
	)
}

export default ResetPassword
