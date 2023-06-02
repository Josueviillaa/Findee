function buscarProductos() {
    // Obtener el valor de búsqueda ingresado por el usuario
    var searchText = document.getElementById('search-item').value.toLowerCase();
  
    // Obtener la lista de productos
    var productos = document.getElementsByClassName('product');
  
    // Iterar sobre cada producto y verificar si coincide con el término de búsqueda
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      var nombreProducto = producto.getElementsByClassName('pdetails')[0].getElementsByTagName('h2')[0].innerText.toLowerCase();
  
      // Mostrar u ocultar el producto según si coincide con el término de búsqueda
      if (nombreProducto.includes(searchText)) {
        producto.style.display = 'flex';
      } else {
        producto.style.display = 'none';
      }
    }
  }
  