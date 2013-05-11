var Sequelize = require('sequelize')
  , config    = require('./config')
  , sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    logging: false
  })
