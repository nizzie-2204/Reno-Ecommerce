import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	sidebar: {
		flex: 1,
		height: 'calc(100vh - 50px)',
		borderRight: '1px solid #ebeef2',
		position: 'fixed',
		top: 80,
		maxWidth: 300,
		width: 300,
	},

	sidebarWrapper: {
		padding: '20px 0`',
		color: '#555',
	},

	sidebarMenu: {
		marginBottom: 10,
	},

	sidebarTitle: {
		fontSize: 20,
		paddingLeft: 10,
		color: 'rgb(187, 186, 186)',
	},

	sidebardIcon: {
		marginRight: 20,
	},

	link: {
		fontSize: 20,
		display: 'flex',
		alignItems: 'center',
		padding: '10px 20px',
		cursor: 'pointer',
		borderRadius: 6,
		transition: '0.3s',
		color: theme.palette.text.primary,

		'&:hover': {
			textDecoration: 'none',
			backgroundColor: 'rgb(240, 240, 255)',
		},
	},

	sidebarList: {
		padding: 15,
	},

	sidebarListItem: {
		padding: 5,
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		borderRadius: 10,
	},

	//   .sidebarListItem.active,
	//   sidebarListItem:hover {
	// 	,
	//   },

	sidebarIcon: {
		marginRight: 5,
		fontSize: '20px !important',
	},
}))

export { useStyles }
