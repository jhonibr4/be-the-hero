const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents').where('id_ong', ong_id).select('*');

        return response.json( incidents )
    }
}