//Implemente, na função de listagem do usuário, a possibilidade de filtrar usuários em uma lista, de acordo com a profissão.

import { lerArquivo } from "../01"
import { Usuario } from "../02"

const filtrarUsuariosPorProfissao = (profissao: string): Usuario[] =>{
    return (lerArquivo() as Usuario[]).filter(usuario => usuario.profissao === profissao) ?? "Nenhum usuário encontrado"
}

console.log(filtrarUsuariosPorProfissao('revisor'))
console.log(filtrarUsuariosPorProfissao('developer'))
