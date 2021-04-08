const Mongoose = require('../../database')
import { Schema } from 'mongoose';

const TarefaSchema = new Mongoose.Schema({

  nome: {
    type: String,
    required: true
  },
  dataEntrega: {
    type: String,
    required: true
  },
  dataConclusao: {
    type: String,
    required: false
    
  },
  userId: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  createdAt: {
    type: Date,
    default: Date.now,
  }

}
);



module.exports = Mongoose.model('Tarefas', TarefaSchema)