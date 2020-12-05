const mongoose = require('mongoose');

let dataSchema = new mongoose.Schema({
    data : {type: Object}
}, {
    timestamps: true
})

module.exports = mongoose.model("Data", dataSchema);