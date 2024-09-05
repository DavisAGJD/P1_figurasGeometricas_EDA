class Figuras {
    constructor(area, perimetro){
        this.area = area;
        this.perimetro = perimetro;
    }

    validarEntrada(valor, nombreCampo) {
        if (isNaN(valor) || valor <= 0) {
            alert(`El valor de ${nombreCampo} no debe ser nulo o ser un número negativo.`);
            return null
        }
        return valor;
    }
}

export default Figuras;