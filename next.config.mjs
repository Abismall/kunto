/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    ],
  },
  env: {
    GOOGLE_APP_CLIENT_ID: process.env.GOOGLE_APP_CLIENT_ID,
    GOOGLE_APP_CLIENT_SECRET: process.env.GOOGLE_APP_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};

export default nextConfig;
