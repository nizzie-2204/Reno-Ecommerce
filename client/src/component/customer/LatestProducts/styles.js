import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	lastestProducts: {
		padding: '40px 0',
	},
	list: {
		padding: '0 24px',
	},
	root: {
		width: '100%',
		maxWidth: 345,
		position: 'relative',

		'& .MuiCardActionArea-root': {
			cursor: 'default',
		},

		'&:hover $action': {
			opacity: 1,
			top: '50%',
		},
	},
	media: {
		height: 250,
		transition: '0.5s',

		'&:hover': {
			cursor: 'pointer',
			transform: 'scale(1.2)',
		},
	},
	content: {
		position: 'relative',
		zIndex: 1,
	},
	heading: {
		fontSize: 30,
		fontWeight: 700,
		textTransform: 'capitalize',
		marginBottom: 50,
	},
	topTitle: {
		display: 'flex',
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
	iconCart: {
		fontSize: 24,
		color: theme.palette.text.disabled,
		cursor: 'pointer',
		transition: '0.3s',

		'&:hover': {
			color: theme.palette.text.primary,
		},
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
}))

export { useStyles }
