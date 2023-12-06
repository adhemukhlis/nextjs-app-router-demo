/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

const nextConfig = withBundleAnalyzer({
	publicRuntimeConfig: {
		AppName: 'NextJS App Router Demo'
	},
	env: {
		// BACKEND_API_HOST: process.env.NEXT_BACKEND_API_HOST
	},
	eslint: {
		dirs: ['.']
	},
	poweredByHeader: false,
	trailingSlash: false,
	reactStrictMode: false,
	images: {
		domains: ['dataflow.wiratek.id'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				port: '',
				pathname: '**'
			}
		]
	}
	// transpilePackages: ['antd']
})

module.exports = nextConfig
