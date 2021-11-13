import {
	AppBar,
	Box,
	Button,
	Hidden,
	IconButton,
	InputAdornment,
	ListItem,
	ListItemText,
	TextField,
	Toolbar,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { BiCartAlt, BiMenu, BiSearchAlt2 } from 'react-icons/bi'
import logo from '../../../assets/images/logo.jpg'
import Dropdown from './Drawer/Dropdown'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
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
						<ListItem className={classes.list} disableGutters>
							<ListItemText
								disableTypography
								primary={`Home`}
								className={classes.listLink}
							/>
							<ListItemText
								disableTypography
								primary={`Shop`}
								className={classes.listLink}
							/>
							<ListItemText
								disableTypography
								primary={`Contact us`}
								className={classes.listLink}
							/>
							<ListItemText
								disableTypography
								primary={`About us`}
								className={classes.listLink}
							/>
						</ListItem>
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
