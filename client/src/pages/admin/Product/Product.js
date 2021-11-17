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
import React from 'react'
import { Helmet } from 'react-helmet-async'
import AdminLayout from '../../../component/admin/AdminLayout/AdminLayout'
import { useStyles } from './styles'
import { BiMinus, BiPlus, BiSearchAlt2, BiX, BiPencil } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Product = () => {
	const classes = useStyles()
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
						<Button
							component={Link}
							to="/admin/product/new"
							className={classes.add}
						>
							Add Product
						</Button>
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
										Name
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Description
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Category
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Price
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Quantity
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
									<TableCell align="center">£69.99</TableCell>
									<TableCell align="center">
										<Box className={classes.quantity}>
											<BiMinus style={{ cursor: 'pointer' }} />
											<Typography component="body2">1</Typography>
											<BiPlus style={{ cursor: 'pointer' }} />
										</Box>
									</TableCell>
									<TableCell align="center">£69.99</TableCell>
									<TableCell align="center">£69.99</TableCell>
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

export default Product
