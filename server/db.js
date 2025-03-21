const WRfiles = require('node:fs/promises')
const manipulateINI = require('ini')

async function addInfosDatabase(nome, email, senha) {   
    let texto = await WRfiles.readFile('./database.ini', {
        encoding: 'utf-8'
    })
    let config = {
        database: {
            nome: nome,
            email: email,
            senha: senha
        }
    }
    texto = manipulateINI.stringify(config, {
        section: 'section'
    })
    
    await WRfiles.writeFile('./database.ini', texto)
}

async function getUsuario(email, senha){
    let texto = await WRfiles.readFile('./database.ini', {
        encoding: 'utf-8'
    })

    let infos = manipulateINI.parse(texto)
    
    if (email == infos.section.database.email && senha == infos.section.database.senha) {
        return true
    } else {
        return false
    }
}

module.exports = {
    addInfosDatabase,
    getUsuario
}