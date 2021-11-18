import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	detail: {
		position: 'relative',
		width: '100%',
		zIndex: 999,
		overflow: 'hidden',
		display: 'flex',
		gap: 60,
		padding: 40,
		marginTop: 80,

		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
		},
	},
	imgContainer: {
		flex: 1,

		'& .carousel .slide img': {
			height: 420,
			objectFit: 'cover',
		},

		'& .carousel.carousel-slider': {
			border: '2px solid #e1e1e1',
			borderRadius: 15,
		},

		'& .carousel .thumb': {
			border: '2px solid #e1e1e1',
			borderRadius: 15,
		},

		'& .carousel .thumb.selected': {
			border: '2px solid #a1a1a1',
		},

		'& .carousel .thumbs-wrapper': {
			margin: '20px 0',
		},
	},
	content: {
		flex: 1,
	},
	heading: {
		fontSize: 36,
	},
	price: {
		fontSize: 36,
		fontWeight: 700,
		display: 'block',
		marginBottom: 10,
	},
	desc: {
		lineHeight: 1.6,
		marginBottom: 20,
	},
	sizeContainer: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 20,
	},
	size: {
		padding: 10,
		borderRadius: '50%',
		border: '1px solid #e1e1e1',
		marginRight: 10,
		cursor: 'pointer',
	},
	actions: {
		display: 'flex',
		alignItems: 'center',
	},
	quantity: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 10,
		border: '1px solid #ddd',
		width: 100,
	},
	add: {
		marginLeft: 50,
		padding: '10px 30px',
		minWidth: 155,
		borderRadius: 10,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.secondary,

		'&:hover': {
			backgroundColor: '#ebebeb',
			color: theme.palette.text.primary,
			boxShadow: '0 5px 5px -2px rgb(0 0 0 / 50%)',
		},
	},
}))

export { useStyles }
