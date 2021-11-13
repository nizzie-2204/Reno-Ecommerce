import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/theme'
import Header from './component/customer/Header/Header'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
			</div>
		</ThemeProvider>
	)
}

export default App
