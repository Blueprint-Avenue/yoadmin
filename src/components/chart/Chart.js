import "./chart.scss";
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Area,
	AreaChart,
	ResponsiveContainer,
} from "recharts";

const data = [
	{name: "January", Total: 5000},
	{name: "February", Total: 5550},
	{name: "March", Total: 4000},
	{name: "April", Total: 6200},
	{name: "May", Total: 5800},
	{name: "June", Total: 9400},
];

const Chart = () => {
	return (
		<div className="chart">
			<div className="title">Last 6 Months (Revenue)</div>
			<ResponsiveContainer width="100%" aspect={2 / 1}>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{top: 10, right: 30, left: 0, bottom: 0}}
				>
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#4E9F3D" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#4E9F3D" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="#1E5128" />
					<CartesianGrid strokeDasharray="3 3" className="chart__Grid" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="Total"
						stroke="#4E9F3D"
						fillOpacity={1}
						fill="url(#total)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
