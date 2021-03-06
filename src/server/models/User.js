const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String, 
        required: false
    },
    password: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'user'
    },
    books: 
        [{ type: Schema.Types.ObjectId, ref: 'books' }]
});

module.exports = User = mongoose.model('users', UserSchema, 'users');