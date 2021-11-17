import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import { Helmet } from 'react-helmet-async'
import AdminLayout from '../../../../component/admin/AdminLayout/AdminLayout'
import {
	Box,
	Button,
	Checkbox,
	MenuItem,
	TextField,
	Typography,
} from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi'
import { getAllCategory } from '../../../../redux/slices/categorySlice'
import { getAllSize } from '../../../../redux/slices/sizeSlice'

const icon = <BiCheckbox />
const checkedIcon = <BiCheckboxChecked />

const AddEditProduct = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const categories = useSelector((state) => state.category.categories)
	const sizes = useSelector((state) => state.size.sizes)
	const { register, handleSubmit, reset, control } = useForm()
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchData = () => {
			const action = getAllCategory()
			dispatch(action)

			const action2 = getAllSize()
			dispatch(action2)
		}
		fetchData()
	}, [])

	// Handle select multiple images
	const [imagesDisplay, setImagesDisplay] = useState([])
	const [imagesUpload, setImagesUpload] = useState([])

	const handleOnChangePictures = (e) => {
		const files = e.target.files
		const arrImagesPreview = []
		const arrImagesUpload = []

		Array.from(files)?.forEach((file) => {
			const image = { preview: URL.createObjectURL(file) }
			arrImagesPreview.push(image)
			arrImagesUpload.push(file)
		})
		setImagesDisplay(arrImagesPreview)
		setImagesUpload(arrImagesUpload)
	}

	useEffect(() => {
		return () => {
			imagesDisplay.length > 0 &&
				imagesDisplay.forEach((image) => {
					URL.revokeObjectURL(image.preview)
				})
		}
	}, [imagesDisplay])

	// autocomplete

	const [value, setValue] = useState([])
	// handle product
	const handleAddProduct = (data) => {
		console.log(data)
		console.log(imagesUpload)
		console.log(value)
	}

	const handleEditProduct = (data) => {
		console.log(data)
	}

	return (
		<>
			<Helmet>
				<title>Reno - Admin</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<AdminLayout>
				<Box className={classes.container}>
					<Typography component="h3" className={classes.heading}>
						New product
					</Typography>
					<Box className={classes.content}>
						<form
							className={classes.form}
							onSubmit={handleSubmit(handleAddProduct)}
						>
							<Box className={classes.uploadContainer}>
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
									Images
									<Button
										variant="raised"
										component="span"
										className={classes.uploadBtn}
									>
										Upload
									</Button>
								</label>
							</Box>
							<TextField
								label="Name"
								variant="outlined"
								className={classes.inputGroup}
								{...register('name')}
							/>
							<TextField
								label="Desc"
								variant="outlined"
								className={classes.inputGroup}
								{...register('desc')}
							/>
							<TextField
								label="Price"
								type="number"
								variant="outlined"
								className={classes.inputGroup}
								{...register('price')}
							/>
							<TextField
								label="Quantity"
								type="number"
								variant="outlined"
								className={classes.inputGroup}
								{...register('quantity')}
							/>
							<TextField
								className={classes.inputGroup}
								id="select"
								label="Category"
								select
								variant="outlined"
								{...register('category')}
							>
								{categories?.map((category) => {
									return (
										<MenuItem value={category._id} key={category._id}>
											{category.name}
										</MenuItem>
									)
								})}
							</TextField>

							<Autocomplete
								className={classes.inputGroup}
								id="combo-box-demo"
								multiple
								disableCloseOnSelect
								value={value}
								options={sizes}
								getOptionLabel={(option) => option.name}
								getOptionSelected={(option, value) => value._id === option._id}
								renderInput={(params) => (
									<TextField
										{...params}
										label="Size"
										variant="outlined"
										fullWidth
									/>
								)}
								renderOption={(option, { selected }) => (
									<>
										<Checkbox
											icon={icon}
											checkedIcon={checkedIcon}
											style={{ marginRight: 8 }}
											checked={selected}
										/>
										{option.name}
									</>
								)}
								onChange={(_, selectedOptions) => setValue(selectedOptions)}
							/>
							<Button type="submit" className={classes.saveBtn}>
								Save
							</Button>
						</form>
						<Carousel
							showIndicators={false}
							showArrows={false}
							showStatus={false}
							className={classes.carousel}
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
				</Box>
			</AdminLayout>
		</>
	)
}

export default AddEditProduct
