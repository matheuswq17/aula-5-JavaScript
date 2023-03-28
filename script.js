// substituir texto

let texto ="Estão chegando as provas"
console.log(texto.replace("provas","avaliações"))

// fixar o valor

let num= 223.45555
console.log(num.toFixed(2))

// caixa alert

//alert("olá meu amigo")

//caixa de confirmção
/*
let teste=confirm("Você é um aluno?")
console.log(teste)
*/
// caixa de prompt
/*
let texto1 = prompt("Digite seu nome")
//console.log ("o nome dele é: ", texto1)
document.write("O nome dele é: ", texto1)
*/

/*

if (20 > 10){
document.write("20 é maior")
}

//if elese

if(25>15){
document.write("numero maior")
}else{
    document.write("numero menor")
    document.write("<br><br>")
}
// if else declarando variavel 
let numero =10
if (numero>10){
document.write("o numero é maior")
}else{
    document.write("o numero é menor")
}

*/


//let idade = 18
let idade = prompt("Digite sua idade")

if (idade <= 12){
document.write("é uma cricança")
}else if(idade<=17){
    document.write("é um adolescente")

}else if (idade <= 30){
    document.write("ele é um jovem adulto")

} else{
    document.write("um adulto experiente vulgo idoso")
}