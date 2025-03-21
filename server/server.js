const db = require('./db.js')

const apiDocsInfos = require('./apidocs-info.json')
const express = require("express")
const app = express()
const cors = require('cors');
const swagger = require("swagger-ui-express")

app.use(express.json())
app.use("/api-docs", swagger.serve, swagger.setup(apiDocsInfos))
app.use(cors({
    origin: "*",  
    methods: "*",  
    allowedHeaders: "*",  
}));


app.post("/cadastro", async (req, res) => {
    if (Object.keys(req.body).includes("nome") &&
        Object.keys(req.body).includes("email") &&
        Object.keys(req.body).includes("senha")
    ){
        db.addInfosDatabase(req.body.nome, req.body.email, req.body.senha)
        res.status(201).send({"mensagem": "usuario cadastrado"})
    } else {
        res.status(403).send({"mensagem": "usuario cadastrado"})
    }
})

app.get("/login", async (req, res) => {
    if (await db.getUsuario(req.body.email, req.body.senha)){
        res.status(200).send({"mensagem": "usuario logado!"})
    } else {
        res.status(404).send({"mensagem": "usuario não encontrado"})
    }
})


app.listen(5000, () => {
    console.log("Servidor Ativo - PORT:5000")
})