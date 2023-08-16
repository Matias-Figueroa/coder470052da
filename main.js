function saludar() {
    let nombre = prompt("ingerese su nombre");
    alert(`Bienvenido ${nombre}`);
}

saludar();

const productos = [
    { id: 1, articulo: "Llavero", precio: 500 },
    { id: 2, articulo: "Botella", precio: 1500 },
    { id: 3, articulo: "Accesorio", precio: 2500 },
];
  

  const mostrarProductos = () => {
    console.log("Catálogo de Productos:");

    productos.forEach(productos => {
      console.log(`
        ID: ${productos.id}, 
        Nombre: ${productos.articulo}, 
        Precio: $${productos.precio}
        `);
    });
  };

    const productosPorId = id => productos.find(productos => productos.id === id);

    const filtradoPrecio = maxPrecio => productos.filter(productos => productos.precio <= maxPrecio);

  
  let opcion = parseInt(prompt("Ingrese una de las opciones:\n1. Comprar productos por ID\n2. Ver catálogo \n3. Buscar producto por nombre\n4. Filtrar por precio maximo\n5. Salir"));

  while (opcion !== 5) {
    switch (opcion) {

      case 1:
        let respuesta = "si";
        let contador = 0;
        while (respuesta === "si") {
          const productosId = parseInt(prompt("Ingrese el ID del producto:"));
          const productos = productosPorId(productosId);
        
          if (productos) {
            alert(`Ha comprado ${productos.articulo} por $${productos.precio}. ¡Gracias por su compra!`);
            contador = contador + producto.precio;
            respuesta = prompt("¿Quiere seguir comprando? si/no");
          } else {
            alert("No se encontró la notebook seleccionada.");
          }
        }
        alert(`Total a pagar: $${contador}`);
        break;
  
      case 2:
        mostrarProductos();
        alert ("Los productos se mostraron por consola");
        break;
  
      case 3:
        const nombre = prompt("Ingrese el nombre del producto que desea verificar");
        const productoEncontrado = productos.find(productos => productos.articulo === nombre);
        if (productoEncontrado) {
            alert (`Se encontro el producto ${nombre} en el catálogo.`);
        } else {
          alert(`El producto ${nombre} no se encontró en el catálogo.`);
        }
        break;

        case 4:
            const maxPrecio = parseFloat(prompt("Ingrese el precio máximo para el filtrado:"));
            const productoFiltrado = filtradoPrecio(maxPrecio);
      
            if (productoFiltrado.length > 0) {
              console.log("Productos filtrados por precio:");
              productoFiltrado.forEach(productos => {
                alert= prompt(`
                  ID: ${productos.id},
                  Nombre: ${productos.articulo},
                  Precio: $${productos.precio};
                `);
            });
            alert ("Los productos menores a ese precio se mostraron por consola");
            } else {
              alert(`No se encontraron notebooks dentro del rango de precio $${maxPrecio}.`);
            }
            break;
  
      default:
        alert("Opción no válida. Por favor, ingrese una opción válida.");
        break;
    }
  
    opcion = parseInt(prompt("Ingrese una de las opciones:\n1. Comprar productos por ID\n2. Ver catálogo \n3. Buscar producto por nombre\n4. Filtrar por precio maximo\n5. Salir"));
  }
