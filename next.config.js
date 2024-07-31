const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: "tecdn.b-cdn.net",
                hostname: "firebasestorage.googleapis.com"
            }
        ]
    }
}

module.exports = nextConfig
