const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    loader: 'cloudinary',
    domains: ['res.cloudinary.com'],
    path: 'https://res.cloudinary.com/dyogenez/image/upload',
  },
  env: {
    ROOT_PATH: __dirname,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})