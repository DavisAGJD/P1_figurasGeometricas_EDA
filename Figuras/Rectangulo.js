import Figuras from "./Figura.js";
class Rectangulo extends Figuras {
  constructor(base, altura) {
    super(null, null);
    this.base = this.validarEntrada(base, "Base");
    this.altura = this.validarEntrada(altura, "Altura");
  }

  calcularPerimetro() {
    if (this.base && this.altura) {
      const perimetro = 2 * (this.base + this.altura);
      return `El resultado es ${perimetro}`;
    } else {
      return null;
    }
  }
  calcularArea() {
    if (this.base && this.altura) {
      const area = this.base * this.altura;
      return `El resultado es ${area}`;
    } else {
      return null;
    }
  }
}

export default Rectangulo;
