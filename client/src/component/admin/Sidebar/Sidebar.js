import { Box, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import {
	BiBox,
	BiCategory,
	BiDetail,
	BiDoughnutChart,
	BiHomeAlt,
	BiLogOut,
	BiUser,
} from 'react-icons/bi'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	const classes = useStyles()
	return (
		<Box className={classes.sidebar}>
			<Box className={classes.sidebarWrapper}>
				<Box className={classes.sidebarMenu}>
					{/* <Typography component="h3" className={classes.sidebarTitle}>
						Dashboard
					</Typography> */}
					<List className={classes.sidebarList}>
						<ListItem
							className={classes.link}
							component={Link}
							to="/admin/home"
							disableGutters
						>
							<BiHomeAlt className={classes.sidebardIcon} />
							<ListItemText disableTypography primary={`Home`} />
						</ListItem>
						<ListItem
							className={classes.link}
							component={Link}
							to="/admin/user"
							disableGutters
						>
							<BiUser className={classes.sidebardIcon} />
							<ListItemText disableTypography primary={`User`} />
						</ListItem>
						<ListItem
							className={classes.link}
							component={Link}
							to="/admin/product"
							disableGutters
						>
							<BiBox className={classes.sidebardIcon} />
							<ListItemText disableTypography primary={`Product`} />
						</ListItem>
						<ListItem
							className={classes.link}
							component={Link}
							to="/admin/order"
							disableGutters
						>
							<BiDetail className={classes.sidebardIcon} />
							<ListItemText disableTypography primary={`Order`} />
						</ListItem>
						<ListItem
							className={classes.link}
							component={Link}
							to="/admin/category"
							disableGutters
						>
							<BiCategory className={classes.sidebardIcon} />
							<ListItemText disableTypography primary={`Category`} />
						</ListItem>
						<ListItem
							className={classes.link}
							component={Link}
							to="/admin/size"
							disableGutters
						>
							<BiDoughnutChart className={classes.sidebardIcon} />
							<ListItemText disableTypography primary={`Size`} />
						</ListItem>
						<ListItem
							className={classes.link}
							component={Link}
							to="/"
							disableGutters
						>
							<BiLogOut className={classes.sidebardIcon} />
							<ListItemText disableTypography primary={`Log out`} />
						</ListItem>
					</List>
				</Box>
			</Box>
		</Box>
	)
}

export default Sidebar
