module.exports = {
  images: {
    loader: 'cloudinary',
    domains: ['res.cloudinary.com'],
    path: 'https://res.cloudinary.com/dyogenez/image/upload',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
