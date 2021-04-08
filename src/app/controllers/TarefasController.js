import Tarefas from '../models/Tarefa';
import alert from 'alert'
import vaidaDataTarefa from '../services/validaDataTarefa'
class TarefasController {

  async store(req, res) {

   
    const { userId, nome, dataEntrega, dataConclusao } = req.body
    /* valida dataConlusao depois dataEntrega */
    const validaTarefa = vaidaDataTarefa(dataEntrega, dataConclusao);
    if (!validaTarefa) {
      alert(`Data conclusao tem que ser depois data entrega da tarefa`)
      return res.status(400).json({ error: 'Data conclusao antes data entrega da tarefa' });
    }
    
      await Tarefas.create(req.body)
      return res.json(
        userId,
        nome, 
        dataEntrega, 
        dataConclusao
      );
    


  }
  async listartarefas(req, res) {

    const tarefas = await Tarefas.find( 
      {userId: req.params.userId }
      )

    return res.json(tarefas)
  }

  async update(req, res) {
  
    const tarefas = await Tarefas.findById(req.params.id)
    const {
      userId,
      nome, 
      dataEntrega, 
      dataConclusao
    } = req.body;
    
    await tarefas.updateOne(
      {
        userId: userId,
        nome: nome, 
        dataEntrega: dataEntrega ,
        dataConclusao: dataConclusao
      }
    );
    return res.json({
      userId: userId,
      nome: nome, 
      dataEntrega: dataEntrega ,
      dataConclusao: dataConclusao
    })

  }

  async delete(req, res) {
    const tarefas = await Tarefas.findById(req.params.id)
    await tarefas.delete(req.body);
    res.json({})
  }
}

export default new TarefasController();
