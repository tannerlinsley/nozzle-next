const path = require('path')

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    // config.resolve.modules = [path.resolve(__dirname, "components"), "node_modules"]
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/post/authentication-cookies-vs-jwts-and-why-you-re-doing-it-wrong': {
        page: '/post',
        query: {
          slug: 'authentication-cookies-vs-jwts-and-why-you-re-doing-it-wrong',
        },
      },
    }
  },
}
