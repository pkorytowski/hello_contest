const mongoose = require('mongoose');
const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');


exports.register = async (req, res) => {
    const {error} = validate(req.body);
    if (error){
        return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(400).send('That user already exists!');
    }
    else{
       const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        user = new User({
            user_name: req.body.user_name,
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name,
            surname: req.body.surname,
            born_date: req.body.born_date,
        });
        await user.save();
        res.status(201).send('User created!');
    }

}

