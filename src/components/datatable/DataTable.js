import "./datatable.scss";
import {DataGrid} from "@mui/x-data-grid";
import {userRows, userColumns} from "../../datatablesource";

const DataTable = () => {
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: () => {
				return (
					<div className="cell__Action">
						<div className="view__Button">View</div>
						<div className="delete__Button">Delete</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="data__Table">
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
