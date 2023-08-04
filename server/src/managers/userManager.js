const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt')
const { SECRET } = require('../config/config');



exports.login = async (email,password) => {
    const user = await User.findOne({ email });
    if(!user){
        throw new Error('Invalid email or password')
    }

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
        throw new Error('Invalid email or password')
    }

   token = await createToken(user);


    return token;
}

exports.register = async (userData) => {

    const user = await User.findOne({email: userData.email})

    if(user) {
        throw new Error('This user already exists')
    }
    const created = await User.create(userData)
    const token = await createToken(created);
    return token;
} 


async function createToken (user){
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    }

    const token = await jwt.sing(payload, SECRET , {expiresIn: '1d'})

    return token;
}