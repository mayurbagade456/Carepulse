/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors:true,
    },
    eslint:{
        ignoreDuringBuilds:true,
    },
    experimental: {
        reactStrictMode: false, 
    }
};

export default nextConfig;