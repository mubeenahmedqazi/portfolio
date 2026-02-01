/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Important: Remove or comment out output: 'export' if present
  // output: 'export', // ← DON'T use this for App Router unless you know what you're doing
  
  // Use this instead for App Router
  output: 'standalone', // ← Good for Vercel
  
  // Images config
  images: {
    unoptimized: true, // Vercel will handle optimization
  },
  
  // Ensure proper trailing slash handling
  trailingSlash: false,
};

module.exports = nextConfig;