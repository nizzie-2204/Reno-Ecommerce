import {
	Box,
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
import { BiMinus, BiPlus, BiSearchAlt2, BiX } from 'react-icons/bi'
import CustomerLayout from '../CustomerLayout/CustomerLayout'
import { useStyles } from './styles'

const Order = () => {
	const classes = useStyles()

	const [value, setValue] = useState('')

	const handleRadioChange = (event) => {
		setValue(event.target.value)
		// setError(false);
	}
	return (
		<>
			<Helmet>
				<title>Reno - Shop</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<Box className={classes.profile}>
					<Typography variant="h3" className={classes.heading}>
						Order details
					</Typography>
					<Box className={classes.searchBar}>
						<TextField
							placeholder="Search for order ID"
							variant="outlined"
							className={classes.searchField}
						/>
						<IconButton className={classes.searchBtn}>
							<BiSearchAlt2 />
						</IconButton>
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
										Order ID
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Created Date
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Delivery Price
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Delivery Status
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Payment method
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
									<TableCell align="center">
										<BiX style={{ cursor: 'pointer', fontSize: 20 }} />
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</CustomerLayout>
		</>
	)
}

export default Order
