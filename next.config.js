/** @type {import('next').NextConfig} */

module.exports = ({ defaultConfig }) => {
  const nextConfig = {
    compiler: {
      styledComponents: true,
    },
    ...defaultConfig,
  }
  return nextConfig
}
