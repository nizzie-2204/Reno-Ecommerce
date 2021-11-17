import { Button, TextField, Typography } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {
	addCategory,
	updateCategory,
} from '../../../../redux/slices/categorySlice'
import { useStyles } from './styles'

const AddEditCategory = ({ open, handleClose, category }) => {
	const classes = useStyles()

	const dispatch = useDispatch()
	const { register, handleSubmit, reset } = useForm()
	const [error, setError] = useState('')

	const handleAddCategory = (data) => {
		const action = addCategory(data)
		dispatch(action)
			.unwrap()
			.then((res) => {
				handleClose()
				setError('')
				reset()
			})
			.catch((error) => {
				setError('Name has already been taken')
			})
	}

	const handleEditCategory = (data) => {
		const action = updateCategory(data)
		dispatch(action)
			.unwrap()
			.then((res) => {
				handleClose()
				setError('')
				reset()
			})
			.catch((error) => {
				setError('Name has already been taken')
			})
	}

	useEffect(() => {
		reset(category)
	}, [category])
	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 300,
			}}
		>
			<Fade in={open}>
				<form
					className={classes.paper}
					onSubmit={handleSubmit(
						category ? handleEditCategory : handleAddCategory
					)}
				>
					<TextField
						label="Category"
						variant="outlined"
						required
						className={classes.input}
						{...register('name')}
					/>
					{error !== '' && (
						<Typography component="p" className={classes.error}>
							{error}
						</Typography>
					)}
					<Button className={classes.save} type="submit">
						Save
					</Button>
				</form>
			</Fade>
		</Modal>
	)
}

export default AddEditCategory
