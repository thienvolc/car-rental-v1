import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'n1-pstg-org.mioto.vn',
        pathname: '/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
