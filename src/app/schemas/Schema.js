const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
   
  }, {
    timestamps: true
  })
  module.exports = mongoose.model('Menu', MenuSchema)
