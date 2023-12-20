const fs = require('fs');

const lerArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('../bd.json'));
}

const escreverArquivo = (dados: any): void => {

    // let paraGravar = lerArquivo() as string[]
    // paraGravar.push(dados)

    fs.writeFileSync('../bd.json', JSON.stringify(dados))
}

const resetarArquivo = (): void => {

    const arquivoResetado: string[] = []
    fs.writeFileSync('../bd.json', JSON.stringify(arquivoResetado))
}

const limparArquivo = (): void => {
    fs.writeFileSync('../bd.json', '')
}

//resetarArquivo()
//limparArquivo()

export {
    lerArquivo, 
    escreverArquivo,
    resetarArquivo,
    limparArquivo
}

