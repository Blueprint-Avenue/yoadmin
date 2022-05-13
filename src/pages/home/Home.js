import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
	return (
		<div className="home">
			{/* SideBar Component */}
			<Sidebar />
			<div className="homeContainer">
				{/* Navbar Component */}
				<Navbar />
			</div>
		</div>
	);
};

export default Home;
