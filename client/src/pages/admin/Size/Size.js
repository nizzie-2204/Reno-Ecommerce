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
import TablePagination from '@material-ui/core/TablePagination'
import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { BiPencil, BiSearchAlt2, BiX } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../../component/admin/AdminLayout/AdminLayout'
import { getAllSize, deleteSize } from '../../../redux/slices/sizeSlice'
import AddEditSize from './AddEditSize/AddEditSize'
import { useStyles } from './styles'

const Size = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const sizes = useSelector((state) => state.size.sizes)

	// Modal
	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const [open2, setOpen2] = useState(false)
	const [updateSize, setUpdateSize] = useState()
	const handleOpen2 = (size) => {
		setUpdateSize(size)
		setOpen2(true)
	}
	const handleClose2 = () => {
		setOpen2(false)
	}

	useEffect(() => {
		const fetchSizes = () => {
			const action = getAllSize()
			dispatch(action)
				.then(unwrapResult)
				.then((res) => {})
				.catch((error) => {
					console.log(error)
				})
		}
		fetchSizes()
	}, [])

	const handleDeleteSize = (id) => {
		const action = deleteSize(id)
		dispatch(action)
	}

	// Pagination
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
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
							Add Size
						</Button>
						<AddEditSize open={open} handleClose={handleClose} />
					</Box>
					{sizes.length > 0 ? (
						<>
							<TableContainer
								component={Paper}
								elevation="0"
								style={{ marginBottom: 25 }}
							>
								<Table className={classes.table} aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell align="center" className={classes.tableHead}>
												Name
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
										{sizes.length > 0 &&
											sizes.map((size) => {
												return (
													<TableRow key={size._id}>
														<TableCell
															component="th"
															scope="row"
															className={classes.cellProduct}
															align="center"
														>
															<Typography component="body2">
																{size.name}
															</Typography>
														</TableCell>
														<TableCell align="center">
															{new Date(size.createdAt).toLocaleString()}
														</TableCell>

														<TableCell align="center">
															{new Date(size.updatedAt).toLocaleString()}
														</TableCell>
														<TableCell align="center">
															<BiPencil
																style={{
																	cursor: 'pointer',
																	fontSize: 20,
																	marginRight: 20,
																}}
																onClick={() => handleOpen2(size)}
															/>
															<BiX
																style={{ cursor: 'pointer', fontSize: 20 }}
																onClick={() => {
																	handleDeleteSize(size._id)
																}}
															/>
														</TableCell>
													</TableRow>
												)
											})}
										<AddEditSize
											open={open2}
											handleClose={handleClose2}
											size={updateSize}
										/>
									</TableBody>
								</Table>
							</TableContainer>

							<TablePagination
								component="div"
								count={1}
								rowsPerPageOptions={[10]}
								page={page}
								onPageChange={handleChangePage}
								rowsPerPage={rowsPerPage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</>
					) : (
						<Box className={classes.emptyContainer}>
							<img
								src="https://cdn-icons-png.flaticon.com/512/4076/4076432.png"
								alt=""
								className={classes.emptyImg}
							/>
							<Typography component="p" className={classes.emptyTitle}>
								It's empty in here
							</Typography>
						</Box>
					)}
				</Box>
			</AdminLayout>
		</>
	)
}

export default Size
