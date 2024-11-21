
class IProducto {
    constructor() {
        if (new.target === IProducto) {
            throw new Error("No puedes instanciar una interfaz.");
        }
        if (typeof this.exportDOM !== 'function' || typeof this.stats !== 'function') {
            throw new Error("Debes implementar los métodos exportDOM y stats.");
        }
    }
}

class Producto extends IProducto {
    constructor(nombre, precio, imagen) {
        super();
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    exportDOM() {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <img src="${this.imagen}" class="card-img-top" alt="${this.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${this.nombre}</h5>
                    <p class="card-text">$${this.precio.toLocaleString()}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        `;
        return card;
    }

    stats() {
        return {
            nombre: this.nombre,
            precio: this.precio,
            imagen: this.imagen
        };
    }
}

const productos = [
    new Producto('Avión Comercial', 100000000, 'assets/img/acomercial.jpg'),
    new Producto('Avión Negocios', 150000000, 'assets/img/anegocio.jpg'),
    new Producto('Jet de Negocios', 75000000, 'assets/img/aprivado2.jpg'),
    new Producto('Helicóptero', 30000000, 'assets/img/helicoptero.jpg'),
    new Producto('Avión de Carga', 120000000, 'assets/img/avion-carga.jpg'),
    new Producto('Avión Privado', 95000000, 'assets/img/avion-privado.jpg'),
    new Producto('Drone Militar', 5000000, 'assets/img/drone-militar.jpg'),
    new Producto('Ultraligero', 1500000, 'assets/img/ultraligero.jpg'),
    new Producto('Avión Deportivo', 35000000, 'assets/img/avion-deportivo.jpg')
];

const productCardsContainer = document.getElementById('product-cards');
productos.forEach(producto => {
    productCardsContainer.appendChild(producto.exportDOM());
});
