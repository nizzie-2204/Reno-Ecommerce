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
	Menu,
	MenuItem,
	TextField,
	Toolbar,
	Typography,
} from '@material-ui/core'
import queryString from 'query-string'
import React, { useRef, useState } from 'react'
import { BiCartAlt, BiMenu, BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import logo from '../../../assets/images/logo.jpg'
import { clearUser } from '../../../redux/slices/authSlice'
import { getAllProduct } from '../../../redux/slices/productSlice'
import Dropdown from './Drawer/Dropdown'
import { useStyles } from './styles'

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [searchParams, setsearchParams] = useSearchParams()
	const classes = useStyles()
	const user = useSelector((state) => state.auth.user)
	const token = localStorage.getItem('token')

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

	// Popup user
	const [anchorEl, setAnchorEl] = React.useState(null)

	function handleClick(event) {
		if (anchorEl !== event.currentTarget) {
			setAnchorEl(event.currentTarget)
		}
	}

	function handleClose() {
		setAnchorEl(null)
	}

	const handleLogout = () => {
		localStorage.clear()
		navigate('/login')
		const action = clearUser()
		dispatch(action)
	}

	const handleNavigateOrder = () => {
		navigate('/order')
	}

	const searchRef = useRef('')
	const handleChangeSearchTearm = (e) => {
		searchRef.current = e.target.value
	}

	const handleSearch = () => {
		const search = searchRef.current
		if (search === '') return
		const params = queryString.stringify({ search })
		setsearchParams({ search })
		navigate({
			pathname: '/shop',
			search: `${params}`,
		})

		const action = getAllProduct(params)
		dispatch(action)
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
									<InputAdornment
										position="end"
										style={{ cursor: 'pointer', fontSize: 20 }}
										onClick={handleSearch}
									>
										<BiSearchAlt2 />
									</InputAdornment>
								),
							}}
							onChange={handleChangeSearchTearm}
							ref={searchRef}
							defaultValue={searchParams.get('search')}
						/>
						<IconButton
							disableRipple
							className={classes.cartContainer}
							onClick={handleRedirect}
						>
							<BiCartAlt className={classes.cart} />
							<Typography component="p" className={classes.cartQuantity}>
								{user?.cart?.length || 0}
							</Typography>
						</IconButton>
						{token ? (
							<>
								<Button
									className={classes.email}
									aria-owns={anchorEl ? 'simple-menu' : undefined}
									aria-haspopup="true"
									onMouseOver={handleClick}
									// onClick={handleClick}
								>
									{user.email}
								</Button>
								<Menu
									id="simple-menu"
									anchorEl={anchorEl}
									open={Boolean(anchorEl)}
									onClose={handleClose}
									MenuListProps={{ onMouseLeave: handleClose }}
									PopoverClasses={{
										paper: classes.menu,
									}}
								>
									<MenuItem onClick={handleNavigateOrder}>My order</MenuItem>
									<MenuItem onClick={handleLogout}>Logout</MenuItem>
								</Menu>
							</>
						) : (
							<Hidden mdDown implementation="js">
								<Button component={Link} to="/login" className={classes.signIn}>
									Sign in
								</Button>
							</Hidden>
						)}
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
