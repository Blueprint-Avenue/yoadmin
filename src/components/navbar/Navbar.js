import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search__Bar">
					<input type="text" placeholder="Search..." />
					<SearchIcon />
				</div>
				<div className="items">
					<div className="item">
						<LanguageIcon className="icon" />
						English
					</div>
					<div className="item">
						<DarkModeOutlinedIcon className="icon" />
					</div>
					<div className="item">
						<FullscreenExitOutlinedIcon className="icon" />
					</div>
					<div className="item">
						<NotificationsNoneOutlinedIcon className="icon" />
						<div className="counter">1</div>
					</div>
					<div className="item">
						<ChatBubbleOutlineIcon className="icon" />
						<div className="counter">2</div>
					</div>
					<div className="item">
						<ListAltOutlinedIcon className="icon" />
					</div>
					<div className="item">
						<img
							src="https://images.pexels.com/photos/1808398/pexels-photo-1808398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="avatar image"
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
