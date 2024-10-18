import { useEffect } from "react";
import { useState } from "react";

export default function UserList() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const url = "https://jsonplaceholder.typicode.com/users";
			const response = await fetch(url);
			const data = await response.json();
			setData(data);
		}
		fetchData();
	}, []);

	return (
		<>
			<h1>UserList</h1>
			{data.map((user) => {
				const { id, name } = user;
				return (
					<div key={id} id={id} style={{ margin: "2px" }}>
						{name}
					</div>
				);
			})}
		</>
	);
}
