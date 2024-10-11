class Producto {
    constructor(Id, Nombre, Marca, Mascota, Categoria, TamañoMascota, Edad, Peso, Precio, Stock) {
        this.id = Id;
        this.nombre = Nombre;
        this.marca = Marca;
        this.mascota = Mascota;
        this.categoria = Categoria;
        this.tamañoMascota = TamañoMascota;
        this.edad = Edad;
        this.peso = Peso;
        this.precio = Precio;
        this.stock = Stock;
    }
}

module.exports = Producto;
