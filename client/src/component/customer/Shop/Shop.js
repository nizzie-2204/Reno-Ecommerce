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
import React from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { useStyles } from './styles'
import CustomerLayout from '../CustomerLayout/CustomerLayout'
import { Helmet } from 'react-helmet-async'

const Shop = () => {
	const classes = useStyles()
	return (
		<>
			<Helmet>
				<title>Reno - Shop</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<Grid
					container
					sm
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
						<Grid
							item
							xl={3}
							lg={4}
							md={6}
							sm={12}
							className={classes.gridItem}
						>
							<Card className={classes.root}>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										image="https://i.imgur.com/vN2y3Sh.jpeg"
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Box className={classes.topTitle}>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
												className={classes.name}
											>
												Men's shoe
											</Typography>
											<IconButton>
												<BiCartAlt />
											</IconButton>
										</Box>
										<Box className={classes.bottomTitle}>
											<Typography variant="body2" component="p">
												$599
											</Typography>
											<Rating
												readOnly
												size="small"
												name="size-medium"
												defaultValue={2}
											/>
										</Box>
									</CardContent>
									<Button className={classes.action}>View detail</Button>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid
							item
							xl={3}
							lg={4}
							md={6}
							sm={12}
							className={classes.gridItem}
						>
							<Card className={classes.root}>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										image="https://i.imgur.com/vN2y3Sh.jpeg"
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Box className={classes.topTitle}>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
												className={classes.name}
											>
												Men's shoe
											</Typography>
											<IconButton>
												<BiCartAlt />
											</IconButton>
										</Box>
										<Box className={classes.bottomTitle}>
											<Typography variant="body2" component="p">
												$599
											</Typography>
											<Rating
												readOnly
												size="small"
												name="size-medium"
												defaultValue={2}
											/>
										</Box>
									</CardContent>
									<Button className={classes.action}>View detail</Button>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid
							item
							xl={3}
							lg={4}
							md={6}
							sm={12}
							className={classes.gridItem}
						>
							<Card className={classes.root}>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										image="https://i.imgur.com/vN2y3Sh.jpeg"
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Box className={classes.topTitle}>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
												className={classes.name}
											>
												Men's shoe
											</Typography>
											<IconButton>
												<BiCartAlt />
											</IconButton>
										</Box>
										<Box className={classes.bottomTitle}>
											<Typography variant="body2" component="p">
												$599
											</Typography>
											<Rating
												readOnly
												size="small"
												name="size-medium"
												defaultValue={2}
											/>
										</Box>
									</CardContent>
									<Button className={classes.action}>View detail</Button>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid
							item
							xl={3}
							lg={4}
							md={6}
							sm={12}
							className={classes.gridItem}
						>
							<Card className={classes.root}>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										image="https://i.imgur.com/vN2y3Sh.jpeg"
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Box className={classes.topTitle}>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
												className={classes.name}
											>
												Men's shoe
											</Typography>
											<IconButton>
												<BiCartAlt />
											</IconButton>
										</Box>
										<Box className={classes.bottomTitle}>
											<Typography variant="body2" component="p">
												$599
											</Typography>
											<Rating
												readOnly
												size="small"
												name="size-medium"
												defaultValue={2}
											/>
										</Box>
									</CardContent>
									<Button className={classes.action}>View detail</Button>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</CustomerLayout>
		</>
	)
}

export default Shop
