import { Box, Divider, Typography, Button } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Helmet } from 'react-helmet-async'
import CustomerLayout from '../CustomerLayout/CustomerLayout'
import Rating from '@material-ui/lab/Rating'
import { BiRightArrowAlt, BiMinus, BiPlus, BiX } from 'react-icons/bi'

const ProductDetail = () => {
	const classes = useStyles()
	return (
		<>
			<Helmet>
				<title>Reno - Product</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<Box className={classes.detail}>
					<Box className={classes.imgContainer}>
						<Carousel
							showIndicators={false}
							showArrows={false}
							showStatus={false}
						>
							<Box>
								<img
									src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png"
									alt="product"
								/>
							</Box>
							<Box>
								<img
									src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c9e622c0-f478-4ffb-8def-fc11280e45bf/air-force-1-07-shoe-WrLlWX.png"
									alt="product"
								/>
							</Box>
							<Box>
								<img
									src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1ca41965-1f17-4133-9844-f6347262a727/air-force-1-07-shoe-WrLlWX.png"
									alt="product"
								/>
							</Box>
							<Box>
								<img
									src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/15bcd4d6-2636-4e9d-8b90-47d556a2cc0a/air-force-1-07-shoe-WrLlWX.png"
									alt="product"
								/>
							</Box>
							<Box>
								<img
									src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1241c085-a703-49dd-8a84-5694d5fd8feb/air-force-1-07-shoe-WrLlWX.png"
									alt="product"
								/>
							</Box>
							<Box>
								<img
									src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/894df3e6-1f5b-4a0a-8d9d-dc5112833d0c/air-force-1-07-shoe-WrLlWX.png"
									alt="product"
								/>
							</Box>
						</Carousel>
					</Box>
					<Box className={classes.content}>
						<Typography component="h3" className={classes.heading}>
							Leather Mens Slipper
						</Typography>
						<Typography component="subtitle1" className={classes.price}>
							$20.19
						</Typography>
						<Rating readOnly size="small" name="size-medium" defaultValue={2} />
						<Divider style={{ margin: '20px 0' }} />
						<Typography component="p" className={classes.desc}>
							Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
							eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad mill veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip exet commodo consequat. Duis aute irure dolor
						</Typography>
						<Box className={classes.sizeContainer}>
							<Typography component="p" style={{ marginRight: 20 }}>
								Size
							</Typography>
							<Box className={classes.size}>31</Box>
						</Box>
						<Box className={classes.actions}>
							<Typography component="p" style={{ marginRight: 20 }}>
								Quantity
							</Typography>
							<Box className={classes.quantity}>
								<BiMinus style={{ cursor: 'pointer' }} />
								<Typography component="body2">1</Typography>
								<BiPlus style={{ cursor: 'pointer' }} />
							</Box>
							<Button className={classes.add}>Add to Cart</Button>
						</Box>
					</Box>
				</Box>
			</CustomerLayout>
		</>
	)
}

export default ProductDetail
