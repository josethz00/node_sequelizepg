const User = require('../models/User');
const Tech = require('../models/Tech');

module.exports={

    async index(req, res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: {association: 'techs'}
        });

        return res.json(user.techs); //.techs é para relacionamento

    },

    async store(req, res){
        //poderia ser pego pelo body tbm, mas como está NA URL DA REQUISIÇÃO, PODE SER ASSIM TAMBÉM
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);
        if(!user){
            return res.status(400).json({error: 'User not found!'});
        }
        const [ tech ] = await Tech.findOrCreate({ //pois esse metodo retorna em array
            where: { name }
        }); // tenta procurar uma tech com as caracteristicas do model Tech, 
        //se não achar, irá criar com os parametros da requisicao passados acima
        await user.addTech(tech);
        
        return res.json(tech);
    
    },

    async delete(req, res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);
        if(!user){
            return res.status(400).json({error: 'User not found!'});
        }
        const tech = await Tech.findOne({
            where: { name }
        });

        await user.removeTech(tech);

        return res.json();
    }
};