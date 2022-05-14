import "./datatable.scss";
import {DataGrid} from "@mui/x-data-grid";
import {userRows, userColumns} from "../../datatablesource";
import {Link} from "react-router-dom";

const DataTable = () => {
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: () => {
				return (
					<div className="cell__Action">
						<Link to="/users/test" style={{textDecoration: "none"}}>
							<div className="view__Button">View</div>
						</Link>
						<div className="delete__Button">Delete</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="data__Table">
			<div className="data__Title">
				Add New User
				<Link to="/users/new" className="link__Button">
					Add New
				</Link>
			</div>
			<DataGrid
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default DataTable;
