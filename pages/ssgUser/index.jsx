function SSGUser(props) {
	const { data } = props;
	return (
		<>
			<h1>SSG user list</h1>

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

export async function getStaticProps() {
	const url = "https://jsonplaceholder.typicode.com/users";
	const response = await fetch(url);
	const data = await response.json();
	return {
		props: { data },
	};
}

export default SSGUser;
