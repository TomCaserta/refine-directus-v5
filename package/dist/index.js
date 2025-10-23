
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./refine-directus-v5.cjs.production.min.js')
} else {
  module.exports = require('./refine-directus-v5.cjs.development.js')
}
