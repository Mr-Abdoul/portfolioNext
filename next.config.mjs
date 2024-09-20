/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Désactive ESLint lors des builds sur Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
