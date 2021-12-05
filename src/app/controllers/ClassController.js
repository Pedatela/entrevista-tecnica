const MongooseConnection = require('../../database/index')
const Schema = require('../schemas/Schema')


module.exports = {
    async getAll(){
        return {msg: "Retorna todos os dados do schema"}
    },
    
    async create(event){
        return {msg: "Cria os dados"}
    },

    async update(event){
        return {msg: "Atualiza os dados"}
    },
    
    async delete(event){
        return {msg: "Deleta os dados"}
    },
  
  };
  