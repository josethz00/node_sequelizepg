const User = require('../models/User');

module.exports = {
    async index(req, res){
        const users = await User.findAll(); //select

        return res.json(users);
    },
    async store(req, res){
        const { name, email } = req.body;  //Insert
//pega do campo da requisição
        const user = await User.create({ name, email}); //ou name: name, email: email ---SHORT SYNTAX

        return res.json(user);
    }
};