let pizza = ["harina","agua","aceite oliva","sal","azucar","tomate","oregano","ajo","queso","aceituna",]



function pizzaMethods(list) {
let even ="ingredientes pares: " + list.filter((a)=>{return a.length%2 === 0})
let unEven ="ingredientes impares: " + list.filter((a)=>{return a.length%2 !== 0})


console.log(even)
console.log(unEven)

}


function pizzaFor(list){
let even = "ingredientes pares: " ;
let uneven = "ingredientes impares: ";
for(let i = 0; i < list.length;i++){
if(list[i].length % 2 === 0){
even += list[i] + ",";
}else{
uneven += list[i] + ",";

}
}

console.log(even.substr(0,even.length - 1))
console.log(uneven.substr(0,uneven.length - 1))
}



console.log(pizzaFor(pizza))
console.log(pizzaMethods(pizza))
