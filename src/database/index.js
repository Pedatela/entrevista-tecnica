
const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect("mongodb://admin:password@localhost:27017/paketa?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log("MongoDB connection established successfully")
    });
}