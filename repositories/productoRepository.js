const fs = require('fs');
const path = require('path');

class ProductoRepository {
  constructor() {
    this.rutaArchivo = path.join('data/Products.json');
  }

  obtenerProductos() {
    const data = fs.readFileSync(this.rutaArchivo);
    return JSON.parse(data);
  }

  obtenerProductoPorId(Id) {
    const productos = this.obtenerProductos();
    return productos.find(producto => producto.Id === parseInt(Id));
  }

  crearProducto(nuevoProducto) {
    const productos = this.obtenerProductos();
    nuevoProducto.Id = productos.length + 1;
    productos.push(nuevoProducto);
    this.guardarProductos(productos);
    return nuevoProducto;
  }

  actualizarProducto(Id, datosActualizados) {
    const productos = this.obtenerProductos();
    const index = productos.findIndex(producto => producto.Id === parseInt(Id));
    if (index !== -1) {
      productos[index] = { ...productos[index], ...datosActualizados };
      this.guardarProductos(productos);
      return productos[index];
    }
    return null;
  }

  eliminarProducto(Id) {
    let productos = this.obtenerProductos();
    const index = productos.findIndex(producto => producto.Id === parseInt(Id));
    if (index !== -1) {
      productos = productos.filter(producto => producto.Id !== parseInt(Id));
      this.guardarProductos(productos);
      return true;
    }
    return false;
  }

  guardarProductos(productos) {
    fs.writeFileSync(this.rutaArchivo, JSON.stringify(productos, null, 2));
  }
}

module.exports = ProductoRepository;
