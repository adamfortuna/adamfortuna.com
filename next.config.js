const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  // swcMinify: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    loader: 'cloudinary',
    formats: ['image/avif', 'image/webp'],
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