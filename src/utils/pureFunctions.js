const maskify = (expresion) => {
      
    if(!permitido(expresion,"1234567890")) return "Debe de ingresar solo numeros."
    if(expresion.length >= 7){

      let countCreditCard = 0;
      let tempCreditCard = ''; 
      
      Array.from(expresion).forEach(digit => {

       if(countCreditCard === 0 || countCreditCard >= (expresion.length - 4)) tempCreditCard += digit
       else tempCreditCard += '*'
       
       countCreditCard += 1
       
      });

      return tempCreditCard;
    }
    return expresion;
}

const numberToOrdinal = (expresion) => {

if (!Number.isInteger(parseInt(expresion)) || expresion < 0) return `${expresion} no es un numero entero positivo`

let tempOrdinal = ''
switch(expresion){
      case "0":
      tempOrdinal=`${expresion}`;
      break;
      case "1":
      tempOrdinal= `${expresion}st`;
      break;
      case "2":
        tempOrdinal= `${expresion}nd`;
      break;
      case "3":
        tempOrdinal= `${expresion}rd`;
      break;
      default:
        tempOrdinal=`${expresion}th`;
}

return tempOrdinal;

}

const calculate = (expresion) => {

if(!permitido(expresion,"1234567890+-*/")) return "Debe de ingresar solo numeros y operadores + - * /"
let arrExpresion =  Array.from(expresion);
let tempResultado = new Array();

arrExpresion.forEach(item => {

  if (item!= "+" && item != "*" && item != "-" && item != "/") tempResultado.push(parseInt(item));
  else {
    let operator = item;
    let value1 = tempResultado.pop();
    let value2 = tempResultado.pop();
    
    switch (operator) {
      case "+":
        tempResultado.push(value1 + value2);
        break;
      case "*":
        tempResultado.push(value1 * value2);
        break;
      case "-":
        tempResultado.push(value1 - value2);
        break;
      case "/":
        tempResultado.push(value1 / value2);
        break;
    }
  }

});
  
if (expresion === "" || expresion === null)  return "Error: No existen datos para realizar el calculo.";
return tempResultado[0];

}

const validarSoloNumeros = (cadenaStr) => {
    debugger;
    let sum = 0;
    cadenaStr.split('').forEach(el => {
        if (Number.isInteger(parseInt(el)))  sum += 1;
    });

    if(cadenaStr.length === sum) return 1
    else return 0;
}

const permitido = (campo, permitidos) => {

    let caracter;
    let resultado = true;
    for (let i=0; i<campo.length; i++) {
        caracter=campo.charAt(i)
        if (permitidos.indexOf(caracter) == -1) resultado=false;
    }
    if (!resultado) resultado = false;

     return  resultado;
}


module.exports = {
    maskify,
    numberToOrdinal,
    calculate
}