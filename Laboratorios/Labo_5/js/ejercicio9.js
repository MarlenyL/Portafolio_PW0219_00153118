
function nueve(radio){
    if(radio<=0){
        return -1;
    }
    var area = Math.PI*radio*radio;
    return area;
}
var rad= window.prompt("Escriba el radio del circulo: ");
console.log(nueve(rad));