import {
	Box,
	Button,
	Hidden,
	TableContainer,
	Typography,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from '@material-ui/core'
import React, { useState } from 'react'
import { BiRightArrowAlt, BiMinus, BiPlus, BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import bgCart from '../../../assets/images/cart.svg'
import { useStyles } from './styles'
import CustomerLayout from '../CustomerLayout/CustomerLayout'
import { Helmet } from 'react-helmet-async'

const Cart = () => {
	const classes = useStyles()

	const [isEmpty, setIsEmpty] = useState(false)

	return (
		<>
			<Helmet>
				<title>Reno - Cart</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				{!isEmpty ? (
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
										<TableCell align="center" className={classes.tableHead}>
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
										<TableCell
											align="center"
											className={classes.tableHead}
										></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell
											component="th"
											scope="row"
											className={classes.cellProduct}
											align="center"
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
										<TableCell align="center">
											<Box className={classes.quantity}>
												<BiMinus style={{ cursor: 'pointer' }} />
												<Typography component="body2">1</Typography>
												<BiPlus style={{ cursor: 'pointer' }} />
											</Box>
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
