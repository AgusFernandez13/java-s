producto = parseInt(prompt("escoje un producto: 1.computadora asus - 2.tv - 3.celulares - 4.mouse"))
 
let totalCompra = 0
let seguirComprando = true
let decision 

while (seguirComprando === true) {
    if(producto === 1){
        totalCompra = totalCompra + 50023
    } else if (producto === 2){
        totalCompra = totalCompra + 100000
    } else if (producto ===3){
        totalCompra = totalCompra + 8000
    } else if (producto === 4){
        totalCompra = totalCompra + 1000
    } else{
        producto = parseInt(prompt("escoje un producto: 1.computadora asus - 2.tv - 3.celulares - 4.mouse"))
        continue
    }

    decision = parseInt(prompt("desea seguir comprando? 1.si - 2.no"))
    if (decision === 1) {
        producto = parseInt(prompt("escoje un producto: 1.computadora asus - 2.tv - 3.celulares - 4.mouse"))
    } 
    else{
        seguirComprando = false
    }
    
    alert('El total de tu compra es ' + totalCompra)
    
}