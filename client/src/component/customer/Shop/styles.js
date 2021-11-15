import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	lastestProducts: {
		padding: 40,
		position: 'relative',
		width: '100%',
		zIndex: 999,
		overflow: 'hidden',
		marginTop: 80,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},
	list: {
		// padding: '0 24px',
	},
	root: {
		width: '100%',
		maxWidth: 345,
		position: 'relative',

		'&:hover $media': {
			transform: 'scale(1.2)',
		},

		'&:hover $action': {
			opacity: 1,
			top: '55%',
		},
	},
	media: {
		height: 250,
		transition: '0.5s',
	},
	heading: {
		fontSize: 30,
		fontWeight: 700,
		textTransform: 'capitalize',

		[theme.breakpoints.down('md')]: {
			fontSize: 26,
		},

		[theme.breakpoints.down('sm')]: {
			marginBottom: 20,
		},
	},
	topTitle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	name: {
		fontSize: 18,
		fontWeight: 300,
		color: theme.palette.text.disabled,
	},
	bottomTitle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	gridItem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	action: {
		position: 'absolute',
		content: "''",
		top: '80%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: '11px 16px',
		fontSize: 15,
		fontWeight: 600,
		backgroundColor: theme.palette.background.paper,
		color: '#303253',
		borderRadius: 30,
		opacity: 0,
		transition: '0.5s ease-out',
		boxShadow: '0 5px 5px -1px rgb(0 0 0 / 20%)',
		textTransform: 'capitalize',
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.text.secondary,
		},
	},
	filter: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'no-wrap',
		marginBottom: 50,
		padding: '0 20px',

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	textField: {
		width: 200,

		'&:last-of-type': {
			marginLeft: 20,
		},

		[theme.breakpoints.down('md')]: {
			width: 140,
		},

		[theme.breakpoints.down('sm')]: {
			width: 200,
		},
	},
}))

export { useStyles }
