import express from 'express'
import config from './config'

import productoRoutes from './routes/producto.routes'

const app = express()

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(productoRoutes)

export default app