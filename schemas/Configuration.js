const mongoose = require('mongoose');

const GuildConfigSchema = new mongoose.Schema({
    channels: {
        type: [String], // Array of channel IDs
        required: true
    },
    roles: {
        type: [String], // Array of role IDs
        required: true
    },
    emojis: {
        type: [String], // Array of emoji strings
        default: []
    },
    prefix: {
        type: String,
        default: '!'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('GuildConfig', GuildConfigSchema);