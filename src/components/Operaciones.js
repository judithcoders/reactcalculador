import React from 'react';
import {maskify, numberToOrdinal, calculate} from '../utils/pureFunctions';

function Operaciones(){

const [operador, setOperador] = React.useState('');
const [expression, setExpression] = React.useState('');
const [resultado, setResultado] = React.useState('');
const [habilita='disabled', setHabilita] = React.useState('');

const ejecutar = () => {
debugger;
let resultado;

if(expression === '') resultado = 'Completar el campo ha calcular.' 
if(expression === '') resultado = 'Completar el campo ha calcular.' 
else {

    switch(operador){

        case "1":
            resultado = maskify(expression);
            break;
        case "2":
            resultado = numberToOrdinal(expression);
            break;
        case "3":
            resultado = calculate(expression);
            break;
        default:
            resultado =  "Seleccionar Una Opcion."
    }

}
setResultado(resultado);

}

const handleChange = (e) => {
    setOperador(e.target.value);
    if(operador == "0") setHabilita("disabled"); 
    else setHabilita("!disabled"); 
}


const limpiar = () => {
    setOperador('');
    setExpression('');
    setResultado('');
    setHabilita('disabled');
}

return (
<div  className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-14">
<div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Operación</div>
<form action="" className=" bg-white shadow-md rounded px-6 py-6 pt-6">
<div className="x-p4 pb-4">
  <label htmlFor="tipo" className="text-sm block font-bold  pb-2">Tipo:</label>
  <select onChange={handleChange} value={operador} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option value="0">Select Option.</option>  
    <option value="1">Credit card number masking.</option>
    <option value="2">Ordinal numbers.</option>
    <option value="3">Reverse polish notation calculator.</option>
  </select>
</div>
<div  className="x-p4 pb-4">
  <label htmlFor="expression" className="text-sm block font-bold pb-2">Datos:</label>
  <input  onChange={e => setExpression(e.target.value)} value= {expression}  type="text" name="expression" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"/>
</div>
<div  className="flex justify-end pt-2">
  <button onClick={ejecutar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Ejecutar</button>
  <button onClick={limpiar}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Cancelar</button>
</div>

<div  className="x-p4 pb-4">
  <label htmlFor="resultado" className="text-sm block font-bold pb-2">Resultado:</label>
  <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">{resultado}</div>
</div>
</form>
</div>
);

}


export default Operaciones;