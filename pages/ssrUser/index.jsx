function SSRUser(props) {
	const { data } = props;
	return (
		<>
			<h1>SSr user list</h1>

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

export async function getServerSideProps() {
	const url = "https://jsonplaceholder.typicode.com/users";
	const response = await fetch(url);
	const data = await response.json();
	return {
		props: { data },
	};
}

export default SSRUser;
