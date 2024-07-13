/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3-alpha-sig.figma.com'], // Allow loading images from any domain
      },
      
};

export default nextConfig;
