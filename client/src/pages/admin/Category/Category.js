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
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { BiPencil, BiSearchAlt2, BiX } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../../component/admin/AdminLayout/AdminLayout'
import {
	deleteCategory,
	getAllCategory,
} from '../../../redux/slices/categorySlice'
import AddEditCategory from './AddEditCategory/AddEditCategory'
import { useStyles } from './styles'

const Category = () => {
	const classes = useStyles()
	const categories = useSelector((state) => state.category.categories)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchCategories = () => {
			const action = getAllCategory()
			dispatch(action)
		}
		fetchCategories()
	}, [])

	// Modal
	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const [updateCategory, setUpadteCategory] = useState()
	const [open2, setOpen2] = useState(false)
	const handleOpen2 = (category) => {
		setUpadteCategory(category)
		setOpen2(true)
	}
	const handleClose2 = () => {
		setOpen2(false)
	}

	const handleDeleteCategory = (id) => {
		const action = deleteCategory(id)
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
							Add Category
						</Button>
						<AddEditCategory open={open} handleClose={handleClose} />
					</Box>
					{categories.length > 0 ? (
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
										{categories?.map((category) => {
											return (
												<TableRow>
													<TableCell
														component="th"
														scope="row"
														className={classes.cellProduct}
														align="center"
													>
														<Typography component="p">
															{category.name}
														</Typography>
													</TableCell>
													<TableCell align="center">
														{new Date(category.createdAt).toLocaleString()}
													</TableCell>
													<TableCell align="center">
														{new Date(category.updatedAt).toLocaleString()}
													</TableCell>
													<TableCell align="center">
														<BiPencil
															style={{
																cursor: 'pointer',
																fontSize: 20,
																marginRight: 20,
															}}
															onClick={() => {
																handleOpen2(category)
															}}
														/>
														<BiX
															style={{ cursor: 'pointer', fontSize: 20 }}
															onClick={() => {
																handleDeleteCategory(category._id)
															}}
														/>
													</TableCell>
												</TableRow>
											)
										})}
										<AddEditCategory
											open={open2}
											handleClose={handleClose2}
											category={updateCategory}
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

export default Category
