import { lerArquivo, escreverArquivo } from '../01/index'

type Usuario = {
    nome: string,
    email: string,
    cpf: string | number,
    profissao?: string,
    endereco?: Endereco | null
}

type Endereco = {
    cep: number,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}

const cadastrarUsuario = (usuario: Usuario): Usuario => {

    if (!usuario.endereco) {
        usuario.endereco = null
    }

    let bd = lerArquivo() as Usuario[]
    bd.push(usuario)    
    escreverArquivo(bd)
    return usuario
}

const listarUsuarios = (filter?: string): Usuario[] => {

    const bd = lerArquivo() as Usuario[]

    if (filter) {
        return bd.filter(usuario => usuario.profissao === filter) 

    }

    return bd
}

console.log(cadastrarUsuario({
    nome: 'garcia',
    email: 'garcia@gmail.com',
    cpf: 12345678911,
    profissao: 'developer'
}))

console.log(cadastrarUsuario({
    nome: 'rod',
    email: 'rodericus@gmail.com',
    cpf: 12345678911,
    profissao: 'revisor'
}))

console.log(listarUsuarios())

export {
    cadastrarUsuario,
    listarUsuarios,
    Usuario
}



