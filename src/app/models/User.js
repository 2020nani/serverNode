const Mongoose = require('../../database')

import bcrypt from 'bcryptjs';


const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    
  },
  nascimento: {
    type: String,
    
  },
  cep: {
    type: String,
    
  },
  endereco: {
    type: String,
    
  },
  numero: {
    type: String,
    
  },
  password: {
    type: String,
    required: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  }

}
);

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
 
}


module.exports = Mongoose.model('User', UserSchema)