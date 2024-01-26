import express from 'express'
import { config } from 'dotenv'
config()

const app = express()

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/static'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
    res.render('index', { title: 'Express and Pug Example' })
})

const SERVER_PORT = process.env.SERVER_PORT
app.listen(SERVER_PORT, () => { console.log(`Listen on localhost:${SERVER_PORT}`) })