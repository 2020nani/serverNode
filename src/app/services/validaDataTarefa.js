export default function validaDataTarefa(dataEntrega, dataConclusao){
    let entrega = dataEntrega.split('/');
    let stringFormataentrega = entrega[0] + '-' + entrega[1] + '-' + entrega[2]
    let entregaFormatado = new Date(stringFormataentrega)
    let conclusao = dataConclusao.split('/');
    let stringFormataconclusao = conclusao[0] + '-' + conclusao[1] + '-' + conclusao[2]
    let conclusaoFormatado = new Date(stringFormataconclusao)
   const Entrega = entregaFormatado.getTime()
   const Conclusao = conclusaoFormatado.getTime()
   if(Entrega > Conclusao){
       return false
   }
   return true
}