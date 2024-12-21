const mongoose =require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: { type: String, required: true },
    createdAt: { type: Date, expires: '24h', default: Date.now }
}); 

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);
