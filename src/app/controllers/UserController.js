import bcrypt, { hash } from 'bcryptjs';
import User from '../models/User';
import alert from 'alert'
import TestaCPF from '../services/validaCpf'
import ValidaIdade from '../services/validaIdade'

class UserController {
  async store(req, res) {
    /* valida se email ja esta cadastrado */
    const userExists = await User.findOne({ email: req.body.email  });
    
    if (userExists !== null) {
      alert(`Email ja esta cadastrado`)
      return res.status(400).json({ error: 'Este email ja esta cadastrado' });
    }
    /* valida cpf ja esta cadastrado */
    if(req.body.cpf){
    const userCpfExists = await User.findOne({ cpf: req.body.cpf  });
    if (userCpfExists !== null) {
      alert(`Cpf ja esta cadastrado`)
      return res.status(400).json({ error: 'Este cpf ja esta cadastrado' });
    }
    /* valida cpf e valido */
    const validaCpf = TestaCPF(req.body.cpf)
    if(!validaCpf){
      alert(`Cpf nao e valido`)
      return res.status(400).json({ error: 'Este cpf nao e valido' });
    }
  }
    /* valida idade maios que 12 anos */
    const idade = ValidaIdade(req.body.nascimento)
    if(idade < 13){
      alert(`Apenas maiores de 12 anos pode se cadastrar`)
      return res.status(400).json({ error: 'Idade inferior a 13 anos' });
    }
   
    const password = bcrypt.hashSync(req.body.password)

    const { name, email, cpf, nascimento, cep, endereco, numero } = req.body
    await User.create(
        {
          name: name,
          email: email,
          cpf: cpf,
          nascimento: nascimento,
          cep: cep,
          endereco: endereco,
          numero: numero,
          password: password

        }
    );

    return res.json({
      name,
      email,
      nascimento
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validacao falhou' });
    }

    const { email, oldPassword, name } = req.body;
   
    const user = await User.findById(req.params.id)
 
   if (email !== user.email) {
      const userExists = await User.findOne({  email : email  });
      
      if (userExists) {
        return res.status(400).json({ error: 'Usuario ja existe.' });
      }
    }

    if (oldPassword && !(await user.comparePassword(oldPassword))) {
      return res.status(401).json({ error: 'Senha difere da atual' });
    }
  
    const password = bcrypt.hashSync(req.body.password)
    
     await user.updateOne(
      {
        name: name,
        email: email,
        password: password

      }
     );

   return res.status(200).json({
     name,
     email
   });
  }

  
  async delete(req, res) {
    const user = await User.findById(req.params.id)
     await user.delete(req.body);
    res.json({})
  }
}

export default new UserController();