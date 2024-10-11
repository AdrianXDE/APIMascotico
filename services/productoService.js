class ProductoService {
    constructor(productoRepository) {
      this.productoRepository = productoRepository;
    }
  
    obtenerProductos() {
      return this.productoRepository.obtenerProductos();
    }
  
    obtenerProductoPorId(Id) {
      return this.productoRepository.obtenerProductoPorId(Id);
    }
  
    crearProducto(nuevoProducto) {
      return this.productoRepository.crearProducto(nuevoProducto);
    }
  
    actualizarProducto(Id, datosActualizados) {
      return this.productoRepository.actualizarProducto(Id, datosActualizados);
    }
  
    eliminarProducto(Id) {
      return this.productoRepository.eliminarProducto(Id);
    }
  }
  
  module.exports = ProductoService;
  