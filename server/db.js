const WRfiles = require('node:fs/promises')
const manipulateINI = require('ini')

async function addInfosDatabase(nome, email, senha) {   
    user = await getUsuario(email)
    if(user){
        return false
    }
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
    return true
}

async function getUsuario(email, senha=''){
    let texto = await WRfiles.readFile('./database.ini', {
        encoding: 'utf-8'
    })

    let infos = manipulateINI.parse(texto)
    if(senha != ''){
        if (email == infos.section.database.email && senha == infos.section.database.senha) {
            return true
        } else {
            return false
        }
    } else {
        if(email == infos.section.database.email){
            return true
        } else {
            return false
        }
    }
}

async function getUsuarioData(email){
    let texto = await WRfiles.readFile('./database.ini', {
        encoding: 'utf-8'
    })
    
    let infos = manipulateINI.parse(texto)
    if (email == infos.section.database.email){
        return {
            "nome": infos.section.database.nome,
            "email": infos.section.database.email,
            "senha": infos.section.database.senha
        }
    }

}
module.exports = {
    addInfosDatabase,
    getUsuario,
    getUsuarioData
}