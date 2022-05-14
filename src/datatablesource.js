export const userColumns = [
	{field: "id", headerName: "ID", width: 70},
	{
		field: "user",
		headerName: "User",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cell__WithImg">
					<img className="cell__Img" src={params.row.img} alt="avatar" />
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: "email",
		headerName: "Email",
		width: 230,
	},
	{
		field: "age",
		headerName: "Age",
		width: 100,
	},
	{
		field: "status",
		headerName: "Status",
		width: 160,
		renderCell: (params) => {
			return (
				<div className={`cell__WithStatus ${params.row.status}`}>
					{params.row.status}
				</div>
			);
		},
	},
];

export const userRows = [
	{
		id: 1,
		username: "Snow",
		img: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		status: "active",
		email: "1snow@gmail.com",
		age: 25,
	},
	{
		id: 2,
		username: "Jamie Start",
		img: "https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		status: "passive",
		email: "2snow@gmail.com",
		age: 45,
	},
	{
		id: 3,
		username: "Benny Minny",
		img: "https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		status: "pending",
		email: "3snow@gmail.com",
		age: 35,
	},
	{
		id: 4,
		username: "John Snow",
		img: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		status: "active",
		email: "4snow@gmail.com",
		age: 15,
	},
	{
		id: 5,
		username: "Jeremy Grey",
		img: "https://images.pexels.com/photos/1808398/pexels-photo-1808398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		status: "pending",
		email: "5snow@gmail.com",
		age: 29,
	},
	{
		id: 6,
		username: "Arya Lannister",
		img: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		status: "active",
		email: "6snow@gmail.com",
		age: 28,
	},
	{
		id: 7,
		username: "Jaylen Starz",
		img: "https://images.pexels.com/photos/3027243/pexels-photo-3027243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		status: "active",
		email: "7snow@gmail.com",
		age: 25,
	},
	{
		id: 8,
		username: "Peppa Stig",
		img: "https://images.pexels.com/photos/1839963/pexels-photo-1839963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		status: "active",
		email: "8snow@gmail.com",
		age: 55,
	},
	{
		id: 9,
		username: "Daniel Tiger",
		img: "https://images.pexels.com/photos/2915216/pexels-photo-2915216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		status: "active",
		email: "9snow@gmail.com",
		age: 62,
	},
	{
		id: 10,
		username: "Roxie Sunset",
		img: "https://images.pexels.com/photos/3151296/pexels-photo-3151296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		status: "active",
		email: "90snow@gmail.com",
		age: 64,
	},
];
