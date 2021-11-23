import {
	Box,
	Button,
	Checkbox,
	Hidden,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@material-ui/core'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { BiMinus, BiPlus, BiRightArrowAlt, BiX } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import bgCart from '../../../assets/images/cart.svg'
import CustomerLayout from '../CustomerLayout/CustomerLayout'
import { useStyles } from './styles'

const Cart = () => {
	const classes = useStyles()
	const user = useSelector((state) => state.auth.user)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Helmet>
				<title>Reno - Cart</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				{!user?.cart?.length > 0 ? (
					<Box className={classes.list}>
						<Typography component="h3" className={classes.headingCart}>
							Shopping Cart
						</Typography>
						<TableContainer
							component={Paper}
							elevation="0"
							style={{ marginBottom: 25 }}
						>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell colSpan={2} className={classes.tableHead}>
											Product
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Price
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Quantity
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Total
										</TableCell>
										<TableCell align="center" className={classes.tableHead}>
											Remove
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow
										className={classes.tableROw}
										style={{ backgroundColor: '#fff3ed' }}
									>
										<TableCell>
											<Checkbox
												color="primary"
												// checked={true}
												className={classes.checkbox}
											/>
										</TableCell>
										<TableCell
											component="th"
											scope="row"
											className={classes.cellProduct}
											style={{ justifyContent: 'flex-start' }}
										>
											<img
												src="https://i.imgur.com/EZxObwA.jpeg"
												alt="product"
												className={classes.imgProduct}
											/>
											<Typography component="body2">
												Leather Mens Slipper
											</Typography>
										</TableCell>
										<TableCell align="center">£69.99</TableCell>
										<TableCell align="center" style={{ position: 'relative' }}>
											<Box className={classes.quantity}>
												<BiMinus style={{ cursor: 'pointer' }} />
												<Typography component="body2">1</Typography>
												<BiPlus style={{ cursor: 'pointer' }} />
											</Box>
											<Typography component="p" className={classes.inStock}>
												In stock: 4
											</Typography>
										</TableCell>
										<TableCell align="center">£69.99</TableCell>
										<TableCell align="center">
											<BiX style={{ cursor: 'pointer', fontSize: 20 }} />
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
						<Box className={classes.proceed}>
							<Button component={Link} to="/" className={classes.continue}>
								Continue shopping
							</Button>
							<Box className={classes.checkout}>
								<Typography>Total: $255</Typography>
								<Button component={Link} to="/" className={classes.checkoutBtn}>
									Checkout
								</Button>
							</Box>
						</Box>
					</Box>
				) : (
					<Box className={classes.notFound}>
						<Hidden mdDown implementation="js">
							<Box className={classes.imgContainer}>
								<img src={bgCart} alt="not-found" className={classes.img} />
							</Box>
						</Hidden>
						<Box className={classes.content}>
							<Typography className={classes.heading} component="h2">
								Wow Such an empty Cart
							</Typography>
							<Button component={Link} to="/" className={classes.action}>
								Go shop
								<BiRightArrowAlt className={classes.redirectIcon} />
							</Button>
						</Box>
					</Box>
				)}
			</CustomerLayout>
		</>
	)
}

export default Cart
