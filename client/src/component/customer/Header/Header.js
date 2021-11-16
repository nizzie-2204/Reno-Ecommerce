import {
	AppBar,
	Box,
	Button,
	Hidden,
	IconButton,
	InputAdornment,
	List,
	ListItem,
	ListItemText,
	TextField,
	Toolbar,
} from '@material-ui/core'
import React, { useState } from 'react'
import { BiCartAlt, BiMenu, BiSearchAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.jpg'
import Dropdown from './Drawer/Dropdown'
import { useStyles } from './styles'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate()
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	// Active boxShadow and background Header
	const [activeHeader, setActiveHeader] = useState(false)
	const handleChangeStyleHeader = () => {
		if (window.scrollY > 10) {
			setActiveHeader(true)
		} else setActiveHeader(false)
	}
	window.addEventListener('scroll', handleChangeStyleHeader)

	const handleRedirect = () => {
		navigate('/cart')
	}

	return (
		<>
			<AppBar
				position="fixed"
				className={`${classes.header} ${activeHeader && classes.activeHeader}`}
				elevation={0}
			>
				<Toolbar className={classes.toolbar}>
					<Link to="/" className={classes.logo}>
						<img src={logo} alt="logo" />
					</Link>
					<Hidden mdDown implementation="js">
						<List className={classes.list}>
							<ListItem
								className={classes.listLink}
								component={Link}
								to="/"
								disableGutters
							>
								<ListItemText disableTypography primary={`Home`} />
							</ListItem>
							<ListItem
								className={classes.listLink}
								component={Link}
								to="/shop"
								disableGutters
							>
								<ListItemText disableTypography primary={`Shop`} />
							</ListItem>
							<ListItem
								className={classes.listLink}
								component={Link}
								to="/"
								disableGutters
							>
								<ListItemText disableTypography primary={`Contact us`} />
							</ListItem>
							<ListItem
								className={classes.listLink}
								component={Link}
								to="/"
								disableGutters
							>
								<ListItemText disableTypography primary={`About us`} />
							</ListItem>
						</List>
					</Hidden>

					<Box className={classes.actions}>
						<TextField
							className={classes.input}
							variant="outlined"
							placeholder="Search here ..."
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<BiSearchAlt2 />
									</InputAdornment>
								),
							}}
						/>
						<IconButton
							disableRipple
							style={{ backgroundColor: 'transparent' }}
							onClick={handleRedirect}
						>
							<BiCartAlt className={classes.cart} />
						</IconButton>
						<Hidden mdDown implementation="js">
							<Button component={Link} to="/login" className={classes.signIn}>
								Sign in
							</Button>
						</Hidden>
					</Box>

					<Hidden lgUp implementation="js">
						<IconButton onClick={handleDrawerOpen}>
							<BiMenu />
						</IconButton>
					</Hidden>
				</Toolbar>
			</AppBar>
			<Dropdown open={open} onDrawerClose={handleDrawerClose} />
		</>
	)
}

export default Header
