// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   transpilePackages: ['three'],
//   reactStrictMode: true,
//   output: 'standalone',
//   webpack: (config) => {
//     config.externals = [...(config.externals || []), { canvas: 'canvas' }];
//     config.module.rules.push({
//       test: /\.(glb|gltf)$/,
//       use: {
//         loader: 'file-loader',
//         options: {
//           publicPath: '/_next/static/models/',
//           outputPath: 'static/models/',
//         },
//       },
//     });
//     return config;
//   },
//   images: {
//     domains: ['localhost'],
//     unoptimized: false,
//   },
// }

// module.exports = nextConfig 



/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/models/',
          outputPath: 'static/models/',
        },
      },
    });
    return config;
  },
  images: {
    // Remove `domains`. Use remotePatterns instead.
    remotePatterns: [
      // If your Hero uses localhost during dev
      { protocol: 'http', hostname: 'localhost', port: '3000', pathname: '/**' },
      // Common CDNs/sources (keep only what you actually use)
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      // If you serve via a custom CDN/domain
      // { protocol: 'https', hostname: 'cdn.yourdomain.com', pathname: '/**' },
      // If using CloudFront
      // { protocol: 'https', hostname: 'your-dist-id.cloudfront.net', pathname: '/**' },
    ],
    unoptimized: false,
  },
}
module.exports = nextConfig
