import { ThemeProvider } from '@material-ui/styles'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import theme from './theme/theme'

// Redux
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'
// Admin pages
import HomeAdmin from './pages/admin/Home/Home'
import UserAdmin from './pages/admin/User/User'
import CategoryAdmin from './pages/admin/Category/Category'
import SizeAdmin from './pages/admin/Size/Size'
import ProductAdmin from './pages/admin/Product/Product'
import AddEditProductAdmin from './pages/admin/Product/AddEditProduct/AddEditProduct'
import OrderAdmin from './pages/admin/Order/Order'
// Customer pages
import Home from './pages/customer/Home/Home'
import NotFound from './pages/customer/NotFound/NotFound'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import Cart from './component/customer/Cart/Cart'
import Order from './component/customer/Order/Order'
import ProductDetail from './component/customer/ProductDetail/ProductDetail'
import Shop from './component/customer/Shop/Shop'

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<HelmetProvider>
					<ThemeProvider theme={theme}>
						<div className="App">
							<Router>
								<Routes>
									{/* Customer */}
									<Route path="/" element={<Home />} />
									<Route path="/login" element={<Login />} />
									<Route path="/register" element={<Register />} />
									<Route path="/reset-password" element={<ResetPassword />} />
									<Route path="/forgot-password" element={<ForgotPassword />} />
									<Route path="/cart" element={<Cart />} />
									<Route path="/shop" element={<Shop />} />
									<Route path="/product/:id" element={<ProductDetail />} />
									<Route path="/order" element={<Order />} />

									{/* Admin */}
									<Route path="/admin/home" element={<HomeAdmin />} />
									<Route path="/admin/user" element={<UserAdmin />} />
									<Route path="/admin/category" element={<CategoryAdmin />} />
									<Route path="/admin/size" element={<SizeAdmin />} />
									<Route path="/admin/order" element={<OrderAdmin />} />
									<Route path="/admin/product" element={<ProductAdmin />} />
									<Route
										path="/admin/product/new"
										element={<AddEditProductAdmin />}
									/>

									{/* Not found */}
									<Route path="*" element={<NotFound />} />
								</Routes>
							</Router>
						</div>
					</ThemeProvider>
				</HelmetProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
