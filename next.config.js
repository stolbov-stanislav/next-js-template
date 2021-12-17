/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '/node_modules/normalize-scss/sass')],
    quietDeps: true,
  },
}
