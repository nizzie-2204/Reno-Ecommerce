import React, { lazy, Suspense } from 'react'
import { useLocation, Route, Routes } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PrivateRoute from '../component/PrivateRoute/PrivateRoute'
import PublicRoute from '../component/PublicRoute/PublicRoute'
import '../App.css'
import AdminLayout from '../component/admin/AdminLayout/AdminLayout'

// Admin pages
const HomeAdmin = lazy(() => import('../pages/admin/Home/Home'))
const UserAdmin = lazy(() => import('../pages/admin/User/User'))
const CategoryAdmin = lazy(() => import('../pages/admin/Category/Category'))
const SizeAdmin = lazy(() => import('../pages/admin/Size/Size'))
const ProductAdmin = lazy(() => import('../pages/admin/Product/Product'))
const AddEditProductAdmin = lazy(() =>
	import('../pages/admin/Product/AddEditProduct/AddEditProduct')
)
const OrderAdmin = lazy(() => import('../pages/admin/Order/Order'))
// Customer pages
const Home = lazy(() => import('../pages/customer/Home/Home'))
const NotFound = lazy(() => import('../pages/customer/NotFound/NotFound'))
const ForgotPassword = lazy(() =>
	import('../pages/ForgotPassword/ForgotPassword')
)
const Login = lazy(() => import('../pages/Login/Login'))
const Register = lazy(() => import('../pages/Register/Register'))
const ResetPassword = lazy(() => import('../pages/ResetPassword/ResetPassword'))
const Cart = lazy(() => import('../component/customer/Cart/Cart'))
const Order = lazy(() => import('../component/customer/Order/Order'))
const ProductDetail = lazy(() =>
	import('../component/customer/ProductDetail/ProductDetail')
)
const Shop = lazy(() => import('../component/customer/Shop/Shop'))

const routesApp = [
	{
		path: '/admin/home',
		element: <HomeAdmin />,
	},
	{
		path: '/admin/user',
		element: <UserAdmin />,
	},
	{
		path: '/admin/category',
		element: <CategoryAdmin />,
	},
	{
		path: '/admin/size',
		element: <SizeAdmin />,
	},
	{
		path: '/admin/order',
		element: <OrderAdmin />,
	},
	{
		path: '/admin/product',
		element: <ProductAdmin />,
	},
	{
		path: '/admin/product/new',
		element: <AddEditProductAdmin />,
	},
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
		restricted: true,
	},
	{
		path: '/register',
		element: <Register />,
		restricted: true,
	},
	{
		path: '/reset-password',
		element: <ResetPassword />,
		restricted: true,
	},
	{
		path: '/forgot-password',
		element: <ForgotPassword />,
		restricted: true,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
	{
		path: '/shop',
		element: <Shop />,
	},
	{
		path: '/product/:id',
		element: <ProductDetail />,
	},
	{
		path: '/order',
		element: <Order />,
	},
]

const RoutesApp = () => {
	const location = useLocation()
	return (
		<>
			<TransitionGroup component={null}>
				<CSSTransition timeout={300} classNames="page" key={location.key}>
					<Suspense fallback={null}>
						<Routes location={location}>
							{routesApp.map((route, index) => {
								return route.path.includes('/admin') ? (
									<Route
										element={
											<PrivateRoute>
												<AdminLayout>{route.element}</AdminLayout>
											</PrivateRoute>
										}
										path={route.path}
										key={index}
									/>
								) : (
									<Route
										element={route.element}
										path={route.path}
										key={index}
										restricted={route.restricted}
									/>
								)
							})}
						</Routes>
					</Suspense>
				</CSSTransition>
			</TransitionGroup>
		</>
	)
}

export default RoutesApp
