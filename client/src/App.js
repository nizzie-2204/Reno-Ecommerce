import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/customer/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import theme from './theme/theme'
import { HelmetProvider } from 'react-helmet-async'

function App() {
	return (
		<HelmetProvider>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Router>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/login" element={<Login />} />
							<Route exact path="/register" element={<Register />} />
						</Routes>
					</Router>
				</div>
			</ThemeProvider>
		</HelmetProvider>
	)
}

export default App
