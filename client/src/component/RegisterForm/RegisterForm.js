import React from 'react'
import { useStyles } from './styles'
import {
	Box,
	Button,
	Hidden,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core'
import { BiMailSend, BiLockAlt, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import bgRes2 from '../../assets/images/register-2.png'
import bgRes1 from '../../assets/images/register-1.svg'
import bgRes3 from '../../assets/images/register-3.svg'

const RegisterForm = () => {
	const classes = useStyles()
	return (
		<Box className={classes.login}>
			<Hidden mdDown implementation="js">
				<img src={bgRes2} alt="login" className={classes.img1} />
			</Hidden>
			<Box className={classes.container}>
				<Hidden mdDown implementation="js">
					<Box className={classes.img2Container}>
						<img src={bgRes1} alt="login1" className={classes.img2} />
					</Box>
				</Hidden>
				<form className={classes.form}>
					<img src={bgRes3} alt="avatar" className={classes.avatar} />
					<TextField
						className={classes.input}
						placeholder="Enter name"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<BiUser className={classes.inputIcon} />
								</InputAdornment>
							),
							classes: {
								input: classes.input,
							},
						}}
					/>
					<TextField
						className={classes.input}
						placeholder="Enter email"
						type="email"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<BiMailSend className={classes.inputIcon} />
								</InputAdornment>
							),
							classes: {
								input: classes.input,
							},
						}}
					/>
					<TextField
						className={classes.input}
						placeholder="Enter password"
						type="password"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<BiLockAlt className={classes.inputIcon} />
								</InputAdornment>
							),
							classes: {
								input: classes.input,
							},
						}}
					/>
					<TextField
						className={classes.input}
						placeholder="Confirm password"
						type="password"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<BiLockAlt className={classes.inputIcon} />
								</InputAdornment>
							),
							classes: {
								input: classes.input,
							},
						}}
					/>
					<Button className={classes.action}>Sign Up</Button>
					<Typography component="body2" className={classes.account}>
						Have an Account?
						<Link to="/login" className={classes.redirect}>
							Login
						</Link>
					</Typography>
				</form>
			</Box>
		</Box>
	)
}

export default RegisterForm
