export const generateMetadata = async ({ params }) => {
	return {
		// title: 'Home',
		title: {
			default: 'default title',
			template: '%s | Home'
			// absolute: 'absolute title'
		},
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis.'
	}
}

const Layout = ({ children }) => {
	return (
		<div
			style={{
				height: '100vh'
			}}>
			<div style={{ display: 'flex', height: '100%' }}>
				<div
					style={{
						width: '16rem',
						height: '100%',
						border: '2px solid tomato',
						borderStyle: 'dashed',
						borderRadius: '0.4rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
					<b style={{ transform: 'rotate(-90deg)' }}>SIDE BAR</b>
				</div>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
					<div
						style={{
							width: '100%',
							height: '4rem',
							border: '2px solid tomato',
							borderStyle: 'dashed',
							borderRadius: '0.4rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
						<b>TOP BAR</b>
					</div>
					<div
						style={{
							flex: 1,
							padding: '1rem',
							display: 'flex'
						}}>
						<div style={{ flex: 1, border: '2px solid gray', borderStyle: 'dashed', borderRadius: '0.4rem' }}>{children}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Layout
