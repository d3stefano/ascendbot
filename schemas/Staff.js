const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    discordId: {
        type: String,
        required: true,
        unique: true
    },
    discordName: {
        type: String,
        required: true
    },
    ign: {
        type: String,
        required: true
    },
    timeline: {
        type: [String],
        default: []
    },
    rank: {
        type: String,
        required: true
    },
    hireDate: {
        type: Date,
        default: Date.now
    },
    strikes: {
        type: Number,
        default: 0
    },
    promotions: {
        type: Number,
        default: 0
    },
    demotions: {
        type: Number,
        default: 0
    },
    totalPunishments: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Staff', staffSchema);