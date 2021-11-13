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

		'&:hover $media': {
			transform: 'scale(1.2)',
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
		marginBottom: 50,
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
}))

export { useStyles }
