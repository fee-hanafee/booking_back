const express = require("express");
const dotenv = require('dotenv').config({ path: "./.env" })
const http = require("http")

const restApiServer = require('./server')

const app = express()
const server = http.createServer(app)
restApiServer(app)

const port = process.env.PORT || 8000

server.listen(port,()=> console.log('server on port : ',port))

