import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/table/TableList";

const Single = () => {
	return (
		<div className="view">
			<Sidebar />
			<div className="view__Container">
				<Navbar />
				<div className="top">
					<div className="left">
						<div className="edit__Button">Edit</div>
						<h1 className="title">Information</h1>
						<div className="item">
							<img
								className="item__Img"
								src="https://images.pexels.com/photos/7773879/pexels-photo-7773879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
							/>
							<div className="details">
								<h1 className="item__Title">Jane Doe</h1>
								<div className="detail__Item">
									<span className="item__Key">Email:</span>
									<span className="item__Value">janedoe@email.com</span>
								</div>
								<div className="detail__Item">
									<span className="item__Key">Phone:</span>
									<span className="item__Value">+1 (612)555-0575</span>
								</div>
								<div className="detail__Item">
									<span className="item__Key">Address:</span>
									<span className="item__Value">
										222 Main St. NewYork, NewYork
									</span>
								</div>
								<div className="detail__Item">
									<span className="item__Key">Country:</span>
									<span className="item__Value">United States</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
					</div>
				</div>
				<div className="bottom">
					<h1 className="title">Last Transactions</h1>
					<TableList />
				</div>
			</div>
		</div>
	);
};

export default Single;
