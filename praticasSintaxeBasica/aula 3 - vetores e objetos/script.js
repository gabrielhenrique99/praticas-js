//declaração de um array
/*let array = ['string',1,true];
console.log(array);*/

//array com outros tipos de dados
let array = ['string',1,true,['array1'],['array2'],['array3']];
//console.log(array[4]);

//forEach
//array.forEach(function(item, index){console.log(item,index)});

//push
//array.push('novo item');
//console.log(array);

//pop
//array.pop();
//console.log(array);

//shift
//array.shift();
//console.log(array);

//unshift
//array.unshift('novo item no inicio');
//console.log(array);

//indeOf
//console.log(array.indexOf(true));

//splice
//rray.splice(0,3);
//console.log(array);

//slice
//let novoArray = array.slice(0,3);
//console.log(novoArray);

let object = {string:'string',number:1,Boolean:true,array:["array"],objectInterno: {objectInterno: 'objetoInterno'}}
console.log(object.objectInterno.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);