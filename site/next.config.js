// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.resolve.modules = [
<<<<<<< HEAD
      "node_modules"
=======
      "node_modules", "../packages", "ui"
>>>>>>> b9fd6f233c9a0e1a222643f8ce30f42159c0025f
    ]

    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}
