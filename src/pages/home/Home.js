import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TableList from "../../components/table/TableList";
import Widget from "../../components/widgets/Widget";
import "./home.scss";

const Home = () => {
	return (
		<div className="home">
			{/* SideBar Component */}
			<Sidebar />
			<div className="homeContainer">
				{/* Navbar Component */}
				<Navbar />
				<div className="widgets">
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earnings" />
					<Widget type="balance" />
				</div>
				<div className="charts">
					<Featured />
					<Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
				</div>
				<div className="list__Container">
					<div className="list__Title">Latest Transactions</div>
					<TableList />
				</div>
			</div>
		</div>
	);
};

export default Home;
