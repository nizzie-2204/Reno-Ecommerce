import {
	Box,
	Button,
	Hidden,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
import bgLogin from '../../assets/images/login1.png'
import bgLogin2 from '../../assets/images/login-2.png'
import { BiMailSend, BiLockAlt, BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const LoginForm = () => {
	const classes = useStyles()
	return (
		<Box className={classes.login}>
			<Hidden mdDown implementation="js">
				<img src={bgLogin2} alt="login" className={classes.img1} />
			</Hidden>
			<Box className={classes.container}>
				<Hidden mdDown implementation="js">
					<Box className={classes.img2Container}>
						<img src={bgLogin} alt="login1" className={classes.img2} />
					</Box>
				</Hidden>
				<form className={classes.form}>
					<Typography component="h2" className={classes.heading}>
						Member login
					</Typography>
					<TextField
						className={classes.input}
						placeholder="Email"
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
						placeholder="Password"
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
					<Button className={classes.action}>Login</Button>
					<Link to="/" className={classes.redirect}>
						Forgot Password?
					</Link>
					<Link to="/register" className={classes.redirect}>
						Create your Account
						<BiRightArrowAlt />
					</Link>
				</form>
			</Box>
		</Box>
	)
}

export default LoginForm
