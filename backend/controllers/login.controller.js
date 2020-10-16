const mongoose = require('mongoose');
const { User } = require('../models/user');
const bcrypt = require('bcrypt');


exports.login = async (req, res) => {
    
    let user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send('Incorrect email.');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.status(400).send('Incorrect password.');
    }

    res.send(true);

}


