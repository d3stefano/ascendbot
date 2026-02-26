const mongoose = require('mongoose');

const punishmentLogSchema = new mongoose.Schema({
    code: { type: String, required: true },
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    staffId: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: Number, required: true },
    reason: { type: String, required: true },
    proof: { type: String },
    photos: { type: [String] },
    timestamp: { type: Date, default: Date.now },
    messageId: { type: String },
    channelId: { type: String }
});

module.exports = mongoose.model('PunishmentLog', punishmentLogSchema);