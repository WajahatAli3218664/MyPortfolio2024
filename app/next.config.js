// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export mode
    images: {
      unoptimized: true, // Disable image optimization
      // Add allowed domains for images if needed
      // domains: ['your-image-domain.com'],
    },
    // Additional configurations can be added here
  };
  
  module.exports = nextConfig;
  