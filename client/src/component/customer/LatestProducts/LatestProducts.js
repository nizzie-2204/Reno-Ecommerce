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
import React from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { useStyles } from './styles'

const LatestProducts = () => {
	const classes = useStyles()
	return (
		<Grid
			container
			sm
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
	)
}

export default LatestProducts
