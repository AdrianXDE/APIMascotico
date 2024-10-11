class ProductoController {
    constructor(productoService) {
      this.productoService = productoService;
    }
  
    obtenerProductos(req, res) {
      const productos = this.productoService.obtenerProductos();
      res.json(productos);
    }
  
    obtenerProductoPorId(req, res) {
      const id = req.params.id;
      const producto = this.productoService.obtenerProductoPorId(id);
      if (producto) {
        res.json(producto);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    }
  
    crearProducto(req, res) {
      const nuevoProducto = req.body;
      const producto = this.productoService.crearProducto(nuevoProducto);
      res.status(201).json(producto);
    }
  
    actualizarProducto(req, res) {
      const id = req.params.id;
      const datosActualizados = req.body;
      const producto = this.productoService.actualizarProducto(id, datosActualizados);
      if (producto) {
        res.json(producto);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    }
  
    eliminarProducto(req, res) {
      const id = req.params.id;
      const eliminado = this.productoService.eliminarProducto(id);
      if (eliminado) {
        res.json({ message: 'Producto eliminado' });
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    }
  }
  
  module.exports = ProductoController;
  