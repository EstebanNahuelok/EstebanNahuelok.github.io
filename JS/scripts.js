// Función para animar los productos
function animateProducts() {
    const productListItems = document.querySelectorAll('.product-list li');
    productListItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fadeIn');
        }, index * 200); // Incrementa el retraso para cada elemento
    });
}

// Llamar a la función de animación después de que la página se cargue completamente
window.addEventListener('load', animateProducts);

