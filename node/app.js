import express from "express";
import CarrerasRoutes from './api/routes/CarrerasRoutes.js'
import InstitucionesRoutes from './api/routes/InstitucionesRoutes.js'
import db from "./database/db.js";
import cors from 'cors';
import AuthRoutes from './api/routes/AuthRoutes.js'
import authMiddleware from './api/middlewares/authMiddleware.js'

const app = express()

app.use(cors())

app.use(express.json())


app.use('/instituciones' , InstitucionesRoutes)

app.use('/carreras' , CarrerasRoutes)

app.use('/auth', AuthRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la bd')
} catch (error) {
    console.log(`Conexion fallida a la bd: ${error}`)
}

app.listen(8000, () => {
    console.log('Server up  running in http://localhost:8000/')
})