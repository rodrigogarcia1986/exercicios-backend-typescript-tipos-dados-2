import { lerArquivo, escreverArquivo, limparArquivo } from "../01/index";
import { cadastrarUsuario, listarUsuarios, Usuario } from "../02/index";

const atualizarUsuario = (cpf: string | number, dados: Usuario): Usuario => {

    let bd = lerArquivo() as Usuario[]

    const usuario = bd.find(usuarioAntigo => usuarioAntigo.cpf === cpf)

    if (usuario) {
         Object.assign(usuario, dados)
    } else {
        throw new Error ("Usuário não encontrado")
    }

    limparArquivo()
    escreverArquivo(bd)

    return usuario 
}

const detalharUsuario = (cpf: number): Usuario | string => {    
    const usuarioEncontrado = (lerArquivo() as Usuario[]).find(usuario => usuario.cpf === cpf)
    return usuarioEncontrado ?? "Usuário não encontrado"
}

console.log (atualizarUsuario(12345678911, {"nome":"rodrigo","email":"rodericus@gmail.com","cpf":12345678911,"profissao":"gerente de projetos","endereco":null}))

//console.log(detalharUsuario(12345678911))

export {
    atualizarUsuario,
    detalharUsuario
}