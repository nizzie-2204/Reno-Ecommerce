import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/customer/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import theme from './theme/theme'
import { HelmetProvider } from 'react-helmet-async'
import NotFound from './pages/customer/NotFound/NotFound'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import Cart from './component/customer/Cart/Cart'
import Shop from './component/customer/Shop/Shop'
import ProductDetail from './component/customer/ProductDetail/ProductDetail'

// Customer: Cart Product Checkout ForgotPassword

function App() {
	return (
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
							{/* Not found */}
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Router>
				</div>
			</ThemeProvider>
		</HelmetProvider>
	)
}

export default App
