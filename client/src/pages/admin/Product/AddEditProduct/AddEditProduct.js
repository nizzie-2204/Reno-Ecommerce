import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import { Helmet } from 'react-helmet-async'
import AdminLayout from '../../../../component/admin/AdminLayout/AdminLayout'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const AddEditProduct = () => {
	const classes = useStyles()

	// Handle select multiple images
	const [imagesDisplay, setImagesDisplay] = useState([])

	const handleOnChangePictures = (e) => {
		const files = e.target.files
		const arrImages = []

		Array.from(files)?.forEach((file) => {
			const image = { preview: URL.createObjectURL(file) }
			arrImages.push(image)
		})
		setImagesDisplay(arrImages)
	}

	useEffect(() => {
		return () => {
			imagesDisplay.length > 0 &&
				imagesDisplay.forEach((image) => {
					URL.revokeObjectURL(image.preview)
				})
		}
	}, [imagesDisplay])

	return (
		<>
			<Helmet>
				<title>Reno - Admin</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<AdminLayout>
				<Box className={classes.container}>
					<Typography component="h3">New product</Typography>
					<form className={classes.form}>
						<input
							accept="image/*"
							className={classes.input}
							style={{ display: 'none' }}
							id="raised-button-file"
							multiple
							type="file"
							onChange={handleOnChangePictures}
						/>
						<label htmlFor="raised-button-file">
							<Button
								variant="raised"
								component="span"
								className={classes.button}
							>
								Upload
							</Button>
						</label>
					</form>
					<Carousel
						showIndicators={false}
						showArrows={false}
						showStatus={false}
					>
						{imagesDisplay.length > 0 &&
							imagesDisplay.map((image) => {
								return (
									<div>
										<img src={image.preview} alt="imageproduct" />
									</div>
								)
							})}
					</Carousel>
				</Box>
			</AdminLayout>
		</>
	)
}

export default AddEditProduct
