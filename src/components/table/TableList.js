import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableList = () => {
	const rows = [
		{
			id: 3949590,
			product: "MacBook Air",
			img: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SX385_.jpg",
			customer: "John Smith",
			date: "1 May",
			amount: 1246,
			method: "Cash on Delivery",
			status: "Approved",
		},
		{
			id: 4959690,
			product: "Song Bravia TV",
			img: "https://m.media-amazon.com/images/I/91+pMS0AX1S._AC_SX355_.jpg",
			customer: "Benny Minny",
			date: "1 May",
			amount: 2679,
			method: "Online",
			status: "Approved",
		},
		{
			id: 5969790,
			product: "Klipsch Home Theater System",
			img: "https://m.media-amazon.com/images/I/61nLNnBGxqL._AC_SY355_.jpg",
			customer: "Carol Street",
			date: "1 May",
			amount: 2199,
			method: "Online",
			status: "Pending",
		},
		{
			id: 6979890,
			product: "Playstation 5",
			img: "https://m.media-amazon.com/images/I/61NcNDW3SgL._AC_SY355_.jpg",
			customer: "Michael Doe",
			date: "1 May",
			amount: 900,
			method: "Online",
			status: "Pending",
		},
		{
			id: 7989190,
			product: "Air Jordan 11",
			img: "https://m.media-amazon.com/images/I/51s+PiT3G1L._AC_UX395_.jpg",
			customer: "Jeremy Grey",
			date: "1 May",
			amount: 650,
			method: "Online Payment",
			status: "Pending",
		},
	];
	return (
		<TableContainer component={Paper} className="table">
			<Table sx={{minWidth: 650}} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className="table__Cell">Tracking ID</TableCell>
						<TableCell className="table__Cell">Product </TableCell>
						<TableCell className="table__Cell">Customer</TableCell>
						<TableCell className="table__Cell">Date</TableCell>
						<TableCell className="table__Cell">Amount</TableCell>
						<TableCell className="table__Cell">Payment Method</TableCell>
						<TableCell className="table__Cell">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell className="table__Cell">{row.id}</TableCell>
							<TableCell className="table__Cell">
								<div className="cell__Wrapper">
									<img className="image" src={row.img} alt="" />
									{row.product}
								</div>
							</TableCell>
							<TableCell className="table__Cell">{row.customer}</TableCell>
							<TableCell className="table__Cell">{row.date}</TableCell>
							<TableCell className="table__Cell">{row.amount}</TableCell>
							<TableCell className="table__Cell">{row.method}</TableCell>
							<TableCell className="table__Cell">
								<span className={`status ${row.status}`}>{row.status}</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableList;
