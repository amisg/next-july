import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function UserDetail() {
	const [data, setData] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
	});

	let { name, username, email, phone } = data;

	let router = useRouter();
	// console.log(router);
	let { query } = router;

	let { id } = query;

	useEffect(() => {
		async function fetchData() {
			const url = `https://jsonplaceholder.typicode.com/users/${id}`;
			const response = await fetch(url);
			const data = await response.json();
			console.log(data, "latest data");

			setData(data);
		}
		fetchData();
	}, [id]);

	return (
		<>
			<h1>DynamicROuteDEtail {id}</h1>
			<p>name: {name}</p>
			<p>username: {username}</p>
			<p>email: {email}</p>
			<p>phone: {phone}</p>
		</>
	);
}

export default UserDetail;
