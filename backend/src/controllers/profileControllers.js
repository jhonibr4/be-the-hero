const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const id_ong = request.headers.authorization;

        const incidents = await connection('incidents').where('id_ong', id_ong).select('*');

        return response.json( id_ong )
    }
}