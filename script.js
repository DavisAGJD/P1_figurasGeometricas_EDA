import Rectangulo from "./Figuras/Rectangulo.js"
import Cuadrado from "./Figuras/Cuadrado.js"
import Triangulo from "./Figuras/Triangulo.js"
import Circulo from "./Figuras/Circulo.js"

const seleccionFigura = document.getElementById("figure-selector");
const container = document.querySelector(".container"); 
const formRectanglePerimeter = document.getElementById("form-rectangle-perimeter");
const formRectangleArea = document.getElementById("form-rectangle-area");
const formSquarePerimeter = document.getElementById("form-square-perimeter");
const formSquareArea = document.getElementById("form-square-area");
const formTrianglePerimeter = document.getElementById("form-triangle-perimeter");
const formTriangleArea = document.getElementById("form-triangle-area");
const formCirclePerimeter = document.getElementById("form-circle-perimeter");
const formCircleArea = document.getElementById("form-circle-area");

container.style.display = 'none';
ocultarFormularios();

// Función para ocultar todos los formularios
function ocultarFormularios () {
  formRectanglePerimeter.style.display = 'none';
  formRectangleArea.style.display = 'none';
  formSquarePerimeter.style.display = 'none';
  formSquareArea.style.display = 'none';
  formTrianglePerimeter.style.display = 'none';
  formTriangleArea.style.display = 'none';
  formCirclePerimeter.style.display = 'none';
  formCircleArea.style.display = 'none';
}

// Evento para detectar cambios en selección
seleccionFigura.addEventListener('change', function (event) {
    ocultarFormularios();
    
    if (event.target.value) {
        container.style.display = 'block'; 
    } else {
        container.style.display = 'none';
    }

    switch (event.target.value) {
        case "rectangle":
            formRectanglePerimeter.style.display = 'block';
            formRectangleArea.style.display = 'block';
            break;
        case "square":
            formSquarePerimeter.style.display = 'block';
            formSquareArea.style.display = 'block';
            break;
        case "circle":
            formCirclePerimeter.style.display = 'block';
            formCircleArea.style.display = 'block';
            break;
        case "triangle":
            formTrianglePerimeter.style.display = 'block';
            formTriangleArea.style.display = 'block';
            break;
    }
});


function llamarMetodo(idFormulario, ClaseFigura, metodoCalculo, inputs) {
    document.getElementById(idFormulario).addEventListener('submit', function(event) {
        event.preventDefault();
        
        const valores = inputs.map(id => parseFloat(document.getElementById(id).value));
        
        const figura = new ClaseFigura(...valores);

        const resultado = figura[metodoCalculo]();
        if (resultado !== null) { 
            alert(resultado);
        }
    });
}

// Llamadas para cada figura y su respectivo formulario
llamarMetodo('form-rectangle-perimeter', Rectangulo, 'calcularPerimetro', ['base-rectangle', 'height-rectangle']);
llamarMetodo('form-rectangle-area', Rectangulo, 'calcularArea', ['base-rectangle-area', 'height-rectangle-area']);
llamarMetodo('form-square-perimeter', Cuadrado, 'calcularPerimetro', ['side-1-square']);
llamarMetodo('form-square-area', Cuadrado, 'calcularArea', ['side-square']);
llamarMetodo('form-triangle-perimeter', Triangulo, 'calcularPerimetro', ['side1-triangle', 'side2-triangle', 'side3-triangle']);
llamarMetodo('form-triangle-area', Triangulo, 'calcularArea', ['base-triangle', 'height-triangle']);
llamarMetodo('form-circle-perimeter', Circulo, 'calcularPerimetro', ['radio-perimetro']);
llamarMetodo('form-circle-area', Circulo, 'calcularArea', ['radio']);
   