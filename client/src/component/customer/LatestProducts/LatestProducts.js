import React from 'react'
import { useStyles } from './styles'
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Paper,
	Typography,
} from '@material-ui/core'
import { BiCartAlt, BiMenu, BiSearchAlt2 } from 'react-icons/bi'
import Rating from '@material-ui/lab/Rating'

const LatestProducts = () => {
	const classes = useStyles()
	return (
		<Grid
			container
			sm
			style={{ marginBottom: 500 }}
			direction="column"
			alignItems="center"
			className={classes.lastestProducts}
		>
			<Typography component="h3" className={classes.heading}>
				Lastest Products
			</Typography>
			<Grid item container className={classes.list}>
				<Grid item xl={3} lg={4} md={6} sm={12} className={classes.gridItem}>
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
									<Rating size="small" name="size-medium" defaultValue={2} />
								</Box>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xl={3} lg={4} md={6} sm={12} className={classes.gridItem}>
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
									<Rating size="small" name="size-medium" defaultValue={2} />
								</Box>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xl={3} lg={4} md={6} sm={12} className={classes.gridItem}>
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
									<Rating size="small" name="size-medium" defaultValue={2} />
								</Box>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xl={3} lg={4} md={6} sm={12} className={classes.gridItem}>
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
									<Rating size="small" name="size-medium" defaultValue={2} />
								</Box>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default LatestProducts
