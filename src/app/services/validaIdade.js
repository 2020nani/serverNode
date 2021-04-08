export default function ValidaIdade(nascimento) {
    let dataNascimento = nascimento.split('/');
    let stringFormatadaNascimento = dataNascimento[0] + '-' + dataNascimento[1] + '-' + dataNascimento[2]
    let nascimentoFormatado = new Date(stringFormatadaNascimento).getTime()
    let dataAtual = new Date().getTime()
    return Math.floor(Math.ceil(Math.abs(nascimentoFormatado - dataAtual)/ (1000 * 3600 * 24)) / 365.25)
}

