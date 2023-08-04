const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/
    },
    password: {
        type: String,
        minLength: 5,
        required: [true, 'Password is required']
    }

});
userSchema.virtual('passwordRepeat')
.set(function(value) {
    if(this.password !== value) {
        throw new Error('Passwords must be the same!')
    }
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash;

})

const User = mongoose.model('User', userSchema);
module.exports = User;