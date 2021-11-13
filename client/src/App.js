import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/theme'
import Header from './component/customer/Header/Header'
import Banner from './component/customer/Banner/Banner'
import Category from './component/customer/Category/Category'
import LatestProducts from './component/customer/LatestProducts/LatestProducts'
import Footer from './component/customer/Footer/Footer'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
				<Banner />
				<Category />
				<LatestProducts />
				<Footer />
			</div>
		</ThemeProvider>
	)
}

export default App
