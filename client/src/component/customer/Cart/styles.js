import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	notFound: {
		position: 'relative',
		width: '100%',
		height: '100vh',
		zIndex: 999,
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 80,
	},
	list: {
		position: 'relative',
		width: '100%',
		height: '100vh',
		zIndex: 999,
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 80,
		padding: '100px 90px',

		[theme.breakpoints.down('md')]: {
			padding: '100px 60px',
		},

		[theme.breakpoints.down('sm')]: {
			padding: '100px 40px',
		},
	},
	headingCart: {
		fontSize: 32,
		fontWeight: 600,
		marginBottom: 80,
	},
	tableHead: {
		fontSize: 15,
		fontWeight: 500,
		backgroundColor: '#f7f7f7',
	},
	imgContainer: {
		width: '70%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		width: '70%',
		objectFit: 'cover',
	},
	cellProduct: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	imgProduct: {
		width: 100,
		height: 100,
		marginRight: 20,

		[theme.breakpoints.down('md')]: {
			width: 80,
			height: 80,
		},
	},
	content: {
		width: '50%',

		[theme.breakpoints.down('md')]: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
	heading: {
		fontSize: 30,
		fontWeight: 600,
		marginBottom: 10,
	},
	link: {
		fontSize: 30,
		color: theme.palette.text.disabled,
		display: 'flex',
		alignItems: 'center',

		'&:last-of-type': {
			marginBottom: 20,
		},
	},
	action: {
		padding: '11px 30px',
		textTransform: 'capitalize',
		backgroundColor: '#4d79d8',
		color: theme.palette.text.secondary,
		borderRadius: 25,

		'&:hover': {
			backgroundColor: '#4d79d8',
			color: theme.palette.text.secondary,
		},
	},
	redirectIcon: {
		fontSize: 22,
		marginLeft: 5,
	},
	quantity: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 10,
		border: '1px solid #ddd',
	},
	proceed: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	continue: {
		padding: '15px 30px',
		borderRadius: 10,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.secondary,
	},
	checkout: {
		display: 'flex',
		alignItems: 'center',
	},
	checkoutBtn: {
		padding: '15px 30px',
		borderRadius: 10,
		backgroundColor: theme.palette.text.secondary,
		border: '1px solid #ddd',
		color: theme.palette.primary.main,
		marginLeft: 20,
	},
}))

export { useStyles }
