const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: String,
    degree: String,
    profession: String,
});

module.exports = mongoose.model('Student', user);
