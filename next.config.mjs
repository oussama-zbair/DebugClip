/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Static HTML export — deploy to Vercel/Netlify/Cloudflare Pages
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
