import Figuras from "./Figura.js";
class Circulo extends Figuras {
  constructor(radio) {
    super(null, null);
    this.radio = this.validarEntrada(radio, "Radio");
  }

  calcularPerimetro() {
    if (this.radio) {
      const perimetro = Math.PI * (this.radio * 2);
      return `El resultado es ${perimetro.toFixed(2)}`;
    } else {
      return null;
    }
  }
  calcularArea() {
    if (this.radio) {
      const area = Math.PI * Math.pow(this.radio, 2);
      return `El resulado es ${area.toFixed(2)}`;
    } else {
      return null;
    }
  }
}

export default Circulo;
