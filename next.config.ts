/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable features not supported in static export
  reactStrictMode: true,
};

export default nextConfig;
