import Figuras from "./Figura.js"
class Cuadrado extends Figuras {
    constructor(lado){
        super(null, null)
        this.lado = this.validarEntrada(lado, 'Lado')
        
    }

    calcularPerimetro(){
        if (this.lado){
            const perimetro = this.lado * 4
            return `El resultado es ${perimetro}`
        } else {
            return null
        }
    }
    calcularArea() {
        if(this.lado){
            const  area = this.lado * this.lado
            return `El resultado es ${area}`
        } else {
            return null
        }
    }
}


export default Cuadrado;