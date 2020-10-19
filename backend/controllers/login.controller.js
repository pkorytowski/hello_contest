const mongoose = require('mongoose');
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    
    let user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send('Incorrect email or password.');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.status(400).send('Incorrect email or password.');
    }

    const PrivateKey = process.env.PRIVATE_KEY
    const token = jwt.sign({ _id: user._id }, PrivateKey);
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);
    res.status(200).send(true);

}


