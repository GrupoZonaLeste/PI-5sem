const apiDocsInfos = require('./apidocs-info.json')

const express = require("express")
const app = express()
const cors = require('cors');
const swagger = require("swagger-ui-express")

app.use("/api-docs", swagger.serve, swagger.setup(apiDocsInfos))
app.use(cors({
    origin: "*",  
    methods: "*",  
    allowedHeaders: "*",  
}));


app.post("/cadastro", async (req, res) => {
    res.send("Cadastro do usuário")
})

app.get("/login", async (req, res) => {
    res.send("Login do usuário")
})


app.listen(5000, () => {
    console.log("Servidor Ativo - PORT:5000")
})