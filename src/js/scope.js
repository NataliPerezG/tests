
function descuento(porcent) {
    return precio => precio - (precio * porcent)
}

const diez = descuento(0.10)
const quince = descuento(0.15)

const desc1 = diez(500)
const desc2 = quince(500)

console.log(desc1);
console.log(desc2);


function msg(type) {
    return (messagge) => {
        let hour = new Date().toLocaleTimeString()
        return `[${hour}]: ${type}: ${messagge}`
    }
}

const error = msg('Error')
const error1 = error('Datos incompletos')
const success = msg('Éxito')
const success1 = success('Registro guardado!')

console.log(error1);
console.log(success1);


