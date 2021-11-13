import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/customer/Home/Home'
import Login from './pages/Login/Login'
import theme from './theme/theme'
function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Router>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	)
}

export default App
