/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    ],
  },
  env: {
    GOOGLE_APP_CLIENT_ID: process.env.GOOGLE_APP_CLIENT_ID,
    GOOGLE_APP_CLIENT_SECRET: process.env.GOOGLE_APP_CLIENT_SECRET,
    AUTH_SECRET: process.env.AUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST,
    BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD,
  },
};

export default nextConfig;
