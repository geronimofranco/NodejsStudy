const crypto = require('../global');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        //const app = await connection('app').select('*');
        
        return response.json([{"id": "1","firstName": "Tom","lastName": "Cruise","photo": "https://jsonformatter.org/img/tom-cruise.jpg"},
        {"id": "2","firstName": "Tom","lastName": "Cruise","photo": "https://jsonformatter.org/img/tom-cruise.jpg"}]);
    },

    async create(request, response) {
        const {note, latitude, altitude} = request.body;
        var id = 1;
        return response.json({id});
/* 

        try {
            const {name, url, login, pwd, note} = request.body;
            const hashPwd = crypto.cryptoPwd(login, pwd);
            const active = true;

            const [id] = await connection('app').insert({
                name,
                url,
                login,
                'pwd':hashPwd,
                note,
                active
            });

            return response.json({id});
        }
        catch (err) {
            if (err.errno == 19){
                return response.status(401).json({error:'This app already exists.'});
            }
            else {
                return response.json(err);
            }
        } */
    }
};