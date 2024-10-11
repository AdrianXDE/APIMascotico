const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/productoController');
const ProductoService = require('../services/productoService');
const ProductoRepository = require('../repositories/productoRepository');

// Instanciar las capas con el JSON como origen de datos
const productoRepository = new ProductoRepository();
const productoService = new ProductoService(productoRepository);
const productoController = new ProductoController(productoService);

// Rutas
router.get('/productos', (req, res) => productoController.obtenerProductos(req, res));
router.get('/productos/:id', (req, res) => productoController.obtenerProductoPorId(req, res));
router.post('/productos', (req, res) => productoController.crearProducto(req, res));
router.put('/productos/:id', (req, res) => productoController.actualizarProducto(req, res));
router.delete('/productos/:id', (req, res) => productoController.eliminarProducto(req, res));

module.exports = router;
