const User = require('../models/User');
const Adress = require('../models/Adress');

module.exports={

    async index(req, res){
        const { user_id } = req.params;
        
        const user = await User.findByPk(user_id, {
            include: { association: 'adresses'}
        });

        return res.json(user.adresses)
    },

    async store(req, res){
        //poderia ser pego pelo body tbm, mas como está NA URL DA REQUISIÇÃO, PODE SER ASSIM TAMBÉM
        const { user_id } = req.params;  //pega os parametros da requisicao, no caso o user id, que esta referenciado em routes.js
        const {zipcode, street, number} = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: 'User not found!'});
        }

        const adress = await Adress.create({
            zipcode,
            street,
            number,
            user_id, 
        });

        return res.json(adress); 
    }
};