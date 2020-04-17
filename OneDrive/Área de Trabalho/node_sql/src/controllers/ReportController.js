const User = require('../models/User');
const { Op } = require('sequelize');  //importa os operadores do sequelize para usar nas queries(LIKE, NOT LIKE, GROUP BY, COUNT)
module.exports = {
    async show (req, res){
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: { //iLike pega lowercase e uppercase    //colchete em volta pra dizer que é uma variavel e nao string
                    [Op.iLike] : '%@gmail.com'
                }
            },
            include:[
                { association: 'adresses', where: {street: 'Rua Guilherme Pereira Jeca'}},
                { association: 'techs', required:false, where: {name: {[Op.iLike]:'Postg%'}}}, // o required false, vai permitir mostrar a query, mesmo o user nao tendo aquela tecnologia
            ]
        })

        return res.json(users);
    }
};