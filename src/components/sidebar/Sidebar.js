import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BadgeIcon from "@mui/icons-material/Badge";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import CampaignIcon from "@mui/icons-material/Campaign";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import {Link} from "react-router-dom";
import {DarkModeContext} from "../../context/darkModeContext";
import {useContext} from "react";

const Sidebar = () => {
	const {dispatch} = useContext(DarkModeContext);
	return (
		<div className="sidebar">
			{/* Logo Header */}
			<div className="top">
				<Link to="/" style={{textDecoration: "none"}}>
					<span className="logo">YoAdmin</span>
				</Link>
			</div>
			<hr />
			{/* List Section */}
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">LISTS</p>
					<Link to="/users" style={{textDecoration: "none"}}>
						<li>
							<BadgeIcon className="icon" />
							<span>Users</span>
						</li>
					</Link>
					<Link to="/products" style={{textDecoration: "none"}}>
						<li>
							<InventoryIcon className="icon" />
							<span>Products</span>
						</li>
					</Link>
					<li>
						<LocalShippingIcon className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<QueryStatsIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<CampaignIcon className="icon" />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<MonitorHeartIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<ReceiptLongIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsIcon className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<AccountCircleIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<LogoutIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			{/* Toggle light/dark mode */}
			<div className="bottom">
				<div
					className="color__Option"
					onClick={() => dispatch({type: "LIGHT"})}
				></div>
				<div
					className="color__Option"
					onClick={() => dispatch({type: "DARK"})}
				></div>
			</div>
		</div>
	);
};

export default Sidebar;
