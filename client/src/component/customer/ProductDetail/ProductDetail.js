import { Box, Button, Divider, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import CustomerLayout from '../CustomerLayout/CustomerLayout'
import { useStyles } from './styles'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../redux/slices/productSlice'

const ProductDetail = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { id } = useParams()
	const product = useSelector((state) => state.product.product)

	useEffect(() => {
		const fetchProduct = () => {
			const action = getProduct(id?.toString())
			dispatch(action)
		}
		fetchProduct()
	}, [])

	console.log(product)
	return (
		<>
			<Helmet>
				<title>Reno - Product</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<Box className={classes.detail}>
					<>
						{product && (
							<>
								<Box className={classes.imgContainer}>
									<Carousel
										showIndicators={false}
										showArrows={false}
										showStatus={false}
									>
										{product?.images?.map((image) => (
											<Box>
												<img src={image.preview} alt="product" />
											</Box>
										))}
									</Carousel>
								</Box>
								<Box className={classes.content}>
									<Typography component="h3" className={classes.heading}>
										{product.name}
									</Typography>
									<Typography component="subtitle1" className={classes.price}>
										${product.price}
									</Typography>
									<Rating
										readOnly
										size="small"
										name="size-medium"
										defaultValue={2}
									/>
									<Divider style={{ margin: '20px 0' }} />
									<Typography component="p" className={classes.desc}>
										{product.desc}
									</Typography>
									<Box className={classes.sizeContainer}>
										<Typography component="p" style={{ marginRight: 20 }}>
											Size
										</Typography>
										{product?.size?.map((size) => (
											<Box className={classes.size}>{size.name}</Box>
										))}
									</Box>
									<Box className={classes.actions}>
										<Typography component="p" style={{ marginRight: 20 }}>
											Quantity
										</Typography>
										<Box className={classes.quantity}>
											<BiMinus style={{ cursor: 'pointer' }} />
											<Typography component="p">1</Typography>
											<BiPlus style={{ cursor: 'pointer' }} />
										</Box>
										<Button className={classes.add}>Add to Cart</Button>
									</Box>
								</Box>
							</>
						)}
					</>
				</Box>
			</CustomerLayout>
		</>
	)
}

export default ProductDetail
