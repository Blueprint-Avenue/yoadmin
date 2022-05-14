import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
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
					<Chart />
				</div>
			</div>
		</div>
	);
};

export default Home;
