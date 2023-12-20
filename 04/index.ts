//Implemente uma função que possibilite excluir um usuário. Para excluir o usuário deverá buscá-lo, 
//usando a função de leitura em arquivos, através da propriedade `cpf` no arquivo `bd.json` 
//e os dados da exclusão deverão ser removidos do arquivo.

import { lerArquivo, limparArquivo, escreverArquivo } from "../01/index";
import { Usuario } from "../02";

const excluirUsuario = (cpf: number | string): Usuario => {
    let bd = lerArquivo() as Usuario[]
    let usuario = bd.find(user => user.cpf === cpf)

    if (usuario) {
        bd = bd.filter(user => user !== usuario)
    } else {
        throw new Error("Usuário não encontrado")
    }

    limparArquivo()
    escreverArquivo(bd)

    return usuario
}

console.log(excluirUsuario(12345678910))

