import Figuras from "./Figura.js";

class Triangulo extends Figuras {
  constructor() {
    super(null, null);
  }

  
  esTrianguloValido(lado1, lado2, base) {
    return (
      lado1 + lado2 > base &&
      lado1 + base > lado2 &&
      lado2 + base > lado1
    );
  }

  determinarTipo(lado1, lado2, base) {
    if (!this.esTrianguloValido(lado1, lado2, base)) {
      return "No es un triángulo válido";
    }

    if (lado1 === lado2 && lado2 === base) {
      return "Equilátero";
    } else if (lado1 === lado2 || lado1 === base || lado2 === base) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }

  calcularPerimetro() {
    const lado1 = this.validarEntrada(parseFloat(document.getElementById('side1-triangle').value), "Lado 1");
    const lado2 = this.validarEntrada(parseFloat(document.getElementById('side2-triangle').value), "Lado 2");
    const base = this.validarEntrada(parseFloat(document.getElementById('side3-triangle').value), "Base");

    if (lado1 && lado2 && base) {
      if (!this.esTrianguloValido(lado1, lado2, base)) {
        return "No es un triángulo válido.";
      }
      const tipo = this.determinarTipo(lado1, lado2, base);
      const perimetro = lado1 + lado2 + base;
      return `El resultado es ${perimetro} y es un triángulo ${tipo}`;
    } else {
      return null;
    }
  }

  calcularArea() {
    const base = this.validarEntrada(parseFloat(document.getElementById('base-triangle').value), "Base");
    const altura = this.validarEntrada(parseFloat(document.getElementById('height-triangle').value), "Altura");

    if (base && altura) {
      const area = (base * altura) / 2;
      return `El resultado es ${area}`;
    } else {
      return null;
    }
  }
}

export default Triangulo;
