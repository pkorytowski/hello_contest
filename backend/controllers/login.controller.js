const mongoose = require('mongoose');
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    
    let user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send('Incorrect email.');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.status(400).send('Incorrect password.');
    }

    const PrivateKey = process.env.PRIVATE_KEY
    const token = jwt.sign({ _id: user._id }, PrivateKey, {expiresIn: '1800s'});
    res.send(token);

}


