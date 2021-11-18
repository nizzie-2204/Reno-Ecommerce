import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	MenuItem,
	TextField,
	Typography,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import React, { useEffect, useState } from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { useStyles } from './styles'
import CustomerLayout from '../CustomerLayout/CustomerLayout'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../../redux/slices/productSlice'
import Pagination from '@material-ui/lab/Pagination'
import { unwrapResult } from '@reduxjs/toolkit'

const Shop = () => {
	const classes = useStyles()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const dispatch = useDispatch()
	const products = useSelector((state) => state.product.products)

	// Pagination
	const [count, setCount] = useState(0)
	const [page, setPage] = useState(1)
	const handleChange = (event, value) => {
		// setPage(value)
		console.log(value)
	}

	useEffect(() => {
		const fetchProducts = () => {
			const params = 'limit=12'
			const action = getAllProduct(params)
			dispatch(action)
				.then(unwrapResult)
				.then((res) => {
					setCount(res.pages)
				})
		}

		fetchProducts()
	}, [])

	return (
		<>
			<Helmet>
				<title>Reno - Shop</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<Grid
					container
					direction="column"
					alignItems="center"
					className={classes.lastestProducts}
				>
					<Box className={classes.filter}>
						<Typography component="h3" className={classes.heading}>
							All Products
						</Typography>
						<Box className={classes.select}>
							<TextField
								id="select"
								select
								variant="outlined"
								InputLabelProps={{ shrink: false }}
								className={classes.textField}
							>
								<MenuItem value="">Sort by: Default</MenuItem>
								<MenuItem value="a">a</MenuItem>
								<MenuItem value="b">b</MenuItem>
							</TextField>
							<TextField
								id="select2"
								select
								variant="outlined"
								InputLabelProps={{ shrink: false }}
								className={classes.textField}
							>
								<MenuItem value="">Category: ALl</MenuItem>
								<MenuItem value="1">1</MenuItem>
								<MenuItem value="2">2</MenuItem>
							</TextField>
						</Box>
					</Box>
					<Grid item container className={classes.list}>
						{products?.map((product) => (
							<Grid
								item
								xl={3}
								lg={4}
								md={6}
								sm={12}
								className={classes.gridItem}
							>
								<Card className={classes.root}>
									<CardActionArea className={classes.cardArea}>
										<CardMedia
											className={classes.media}
											image={product.images[0].preview}
											title={product.name}
										/>
										<CardContent className={classes.content}>
											<Box className={classes.topTitle}>
												<Typography
													gutterBottom
													variant="h5"
													component="h2"
													className={classes.name}
												>
													{product.name}
												</Typography>
												<BiCartAlt className={classes.iconCart} />
											</Box>
											<Box className={classes.bottomTitle}>
												<Typography variant="body2" component="p">
													${product.price}
												</Typography>
												<Rating
													readOnly
													size="small"
													name="size-medium"
													defaultValue={2}
												/>
											</Box>
										</CardContent>
										<Button
											component={Link}
											to={`/product/${product._id}`}
											className={classes.action}
										>
											View detail
										</Button>
									</CardActionArea>
								</Card>
							</Grid>
						))}
					</Grid>
					<Pagination
						className={classes.pagition}
						count={count}
						page={page}
						onChange={handleChange}
						variant="outlined"
						shape="rounded"
					/>
				</Grid>
			</CustomerLayout>
		</>
	)
}

export default Shop
