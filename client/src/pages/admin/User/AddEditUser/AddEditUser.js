import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { useStyles } from './styles'
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from '@material-ui/core'

const AddEditUser = ({ open, handleClose }) => {
	const classes = useStyles()

	const [value, setValue] = React.useState('female')

	const handleChange = (event) => {
		setValue(event.target.value)
	}
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
				<form className={classes.paper}>
					<TextField
						label="Fullname"
						variant="outlined"
						required
						className={classes.input}
					/>
					<TextField
						label="Password"
						type="password"
						variant="outlined"
						required
						className={classes.input}
					/>
					<TextField
						label="Email"
						type="email"
						variant="outlined"
						required
						className={classes.input}
					/>
					<FormControl
						component="fieldset"
						style={{
							display: 'flex',
							width: '100%',
							flexDirection: 'row',
							marginBottom: 20,
						}}
					>
						<FormLabel component="legend" className={classes.radioHeading}>
							Role
						</FormLabel>
						<RadioGroup
							aria-label="gender"
							name="gender1"
							value={value}
							onChange={handleChange}
							className={classes.radioContainer}
						>
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="Admin"
							/>
							<FormControlLabel
								value="male"
								control={<Radio />}
								label="Customer"
							/>
						</RadioGroup>
					</FormControl>
					<Button className={classes.save} type="submit">
						Save
					</Button>
				</form>
			</Fade>
		</Modal>
	)
}

export default AddEditUser
