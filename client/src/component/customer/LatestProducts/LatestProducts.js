import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Typography,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import React, { useEffect } from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../../redux/slices/productSlice'

const LatestProducts = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const products = useSelector((state) => state.product.products)

	useEffect(() => {
		const fetchProducts = () => {
			const params = 'limit=8'
			const action = getAllProduct(params)
			dispatch(action)
		}

		fetchProducts()
	}, [])

	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			className={classes.lastestProducts}
		>
			<Typography component="h3" className={classes.heading}>
				Lastest Products
			</Typography>
			<Grid item container className={classes.list}>
				{products?.map((product) => (
					<Grid item xl={3} lg={4} md={6} sm={12} className={classes.gridItem}>
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
		</Grid>
	)
}

export default LatestProducts
