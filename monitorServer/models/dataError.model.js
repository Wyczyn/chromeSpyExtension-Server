const mongoose =require('mongoose');

let dataErrorSchema = new mongoose.Schema({
    error: {type: Object}
}, {
    timestamps: true
});

module.exports = mongoose.model("DataError", dataErrorSchema);
