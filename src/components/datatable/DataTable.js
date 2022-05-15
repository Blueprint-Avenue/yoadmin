import "./datatable.scss";
import {DataGrid} from "@mui/x-data-grid";
import {userRows, userColumns} from "../../datatablesource";
import {Link} from "react-router-dom";
import {useState} from "react";

const DataTable = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cell__Action">
						<Link to="/users/test" style={{textDecoration: "none"}}>
							<div className="view__Button">View</div>
						</Link>
						<div
							onClick={() => handleDelete(params.row.id)}
							className="delete__Button"
						>
							Delete
						</div>
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
				className="data__Grid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default DataTable;
