/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.dicebear.com",
      "avatars.githubusercontent.com",
      "upload.wikimedia.org",
      "www.dmarge.com",
      "cdn-icons.flaticon.com",
      "kajabi-storefronts-production.kajabi-cdn.com",
      "www.cityam.com",
      "yt3.ggpht.com",
      "media-exp1.licdn.com",
      "scontent-lax3-1.xx.fbcdn.net",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  }
};

module.exports = nextConfig;
