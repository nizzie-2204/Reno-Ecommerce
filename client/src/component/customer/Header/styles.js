import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: theme.palette.background.paper,
		height: 80,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	toolbar: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		width: '20%',
	},
	list: {
		width: '40%',
		height: 80,
		padding: 0,
	},
	listLink: {
		textAlign: 'center',
		color: theme.palette.text.primary,
		fontWeight: 600,
		fontSize: 16,
		height: 80,
		lineHeight: '80px',
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': {
			color: theme.palette.text.secondary,
			backgroundColor: theme.palette.primary.main,
		},
	},
	actions: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 'auto',
		[theme.breakpoints.down('md')]: {
			flex: 1,
			marginLeft: 0,
		},
	},
	input: {
		width: 200,
		[theme.breakpoints.down('md')]: {
			flex: 1,
		},
		'& .MuiInputLabel-outlined': {
			fontSize: 14,
			transform: 'translate(14px, 17px) scale(1)',
		},
		'& .MuiOutlinedInput-input': {
			padding: '12.5px 14px',
		},
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#e2e8f0',
			borderRadius: 6,
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#e2e8f0',
			borderRadius: 6,
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#e2e8f0',
			borderRadius: 6,
		},
		'&::placeholder': {
			color: '#e2e8f0',
			fontWeight: 600,
		},
	},
	cart: {
		fontSize: 26,
		fontWeight: 600,
	},
	signIn: {
		textTransform: 'capitalize',
		borderColor: theme.palette.primary.light,
		borderWidth: 2,
		borderStyle: 'solid',
		borderRadius: 0,
		transition: '0.3s',

		'&:hover': {
			color: theme.palette.text.secondary,
			backgroundColor: theme.palette.primary.main,
		},
	},
}))

export { useStyles }
