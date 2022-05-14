import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
	return (
		<div className="featured">
			{/* Top Details */}
			<div className="top">
				<h1 className="title">Total Revenue</h1>
				<MoreVertIcon fontSize="small" />
			</div>
			{/* Bottom Details */}
			<div className="bottom">
				<div className="feature__Chart">
					<CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
				</div>
				<p className="title">Total sales made today</p>
				<p className="amount">$15k</p>
				<p className="desc">
					Previous transactions processing. Last payments may not be included.
				</p>
				<div className="summary">
					<div className="item">
						<div className="item__Title">Target</div>
						<div className="item__Result negative">
							<KeyboardArrowDownIcon fontSize="small" />
							<div className="result__Amount">$17.4k</div>
						</div>
					</div>
					<div className="item">
						<div className="item__Title">Last Week</div>
						<div className="item__Result positive">
							<KeyboardArrowUpIcon fontSize="small" />
							<div className="result__Amount">$70.4k</div>
						</div>
					</div>
					<div className="item">
						<div className="item__Title">Last Month</div>
						<div className="item__Result positive">
							<KeyboardArrowUpIcon fontSize="small" />
							<div className="result__Amount">$80.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
