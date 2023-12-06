// or Dynamic metadata
export const generateMetadata = async ({ params }) => {
	return {
		// title: 'Home',
		title: {
			// default: 'default title',
			// template: 'template title',
			absolute: 'absolute title'
		},
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis.'
	}
}

const Home = () => {
	return (
		<>
			<h1>home</h1>
		</>
	)
}

export default Home
