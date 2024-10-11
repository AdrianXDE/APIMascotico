const express = require('express');
const app = express();
const morgan = require('morgan');
const body= require('body-parser')
const cors= require('cors')

const productoRoutes = require('./routes/productoRoutes');

//cors
app.use(cors())
////Morgan
app.use(morgan('dev'));

app.use(express.json());
app.use('/api', productoRoutes);


///body-parser
app.use(body.urlencoded({extended: false}))
app.use(body.json())

////Rutas archivos estaticos
app.use(express.static('models'));

///Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
