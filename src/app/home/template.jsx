const Template = ({ children }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				flex: 1
			}}>
			{children}
		</div>
	)
}

export default Template
