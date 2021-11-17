import {
	Box,
	Button,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import AdminLayout from '../../../component/admin/AdminLayout/AdminLayout'
import { useStyles } from './styles'
import { BiMinus, BiPlus, BiSearchAlt2, BiX, BiPencil } from 'react-icons/bi'
import AddEditUser from './AddEditUser/AddEditUser'

const User = () => {
	const classes = useStyles()

	// Modal
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	return (
		<>
			<Helmet>
				<title>Reno - Admin</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<AdminLayout>
				<Box className={classes.home}>
					<Box className={classes.searchBar}>
						<TextField
							placeholder="Search for fullname"
							variant="outlined"
							className={classes.searchField}
						/>
						<IconButton className={classes.searchBtn}>
							<BiSearchAlt2 />
						</IconButton>
						<Button className={classes.add} onClick={handleOpen}>
							Add User
						</Button>
						<AddEditUser open={open} handleClose={handleClose} />
					</Box>
					<TableContainer
						component={Paper}
						elevation="0"
						style={{ marginBottom: 25 }}
					>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center" className={classes.tableHead}>
										Fullname
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Email
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Created Date
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Updated Date
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Actions
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell
										component="th"
										scope="row"
										className={classes.cellProduct}
										align="center"
									>
										<Typography component="body2">
											Leather Mens Slipper
										</Typography>
									</TableCell>
									<TableCell align="center">a@gmail.com</TableCell>
									<TableCell align="center">01-01-2012</TableCell>
									<TableCell align="center"> 01-01-2012</TableCell>
									<TableCell align="center">
										<BiPencil
											style={{
												cursor: 'pointer',
												fontSize: 20,
												marginRight: 20,
											}}
										/>
										<BiX style={{ cursor: 'pointer', fontSize: 20 }} />
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</AdminLayout>
		</>
	)
}

export default User
