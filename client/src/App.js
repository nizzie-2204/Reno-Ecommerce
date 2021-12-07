import { ThemeProvider } from '@material-ui/styles'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import RoutesApp from './routes/Routes'

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<HelmetProvider>
					<ThemeProvider theme={theme}>
						<div className="App">
							<Router>
								<RoutesApp />
								<Switch>
									{/* Customer */}
									{/* <Route exact path="/" component={Home} />
									<Route exact path="/login" component={Login} />
									<Route exact path="/register" component={Register} />
									<Route path="/reset-password" component={ResetPassword} />
									<Route
										path="/forgot-password"
										component={<ForgotPassword />}
									/>
									<Route exact path="/cart" component={Cart} />
									<Route path="/shop" component={Shop} />
									<Route exact path="/product/:id" component={ProductDetail} />
									<Route exact path="/order" component={Order} /> */}
									{/* Admin */}
									{/* <Route exact path="/admin/home" component={HomeAdmin} />
									<Route exact path="/admin/user" component={UserAdmin} />
									<Route
										exact
										path="/admin/category"
										component={CategoryAdmin}
									/>
									<Route exact path="/admin/size" component={SizeAdmin} />
									<Route exact path="/admin/order" component={OrderAdmin} />
									<Route exact path="/admin/product" component={ProductAdmin} />
									<Route
										exact
										path="/admin/product/new"
										component={AddEditProductAdmin}
									/> */}
									{/* Not found */}
									<Route path="*" component={NotFound} />
								</Switch>
							</Router>
						</div>
					</ThemeProvider>
				</HelmetProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
