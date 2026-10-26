function exercicio1(){
    const name = prompt("Coloque seu nome:");

    alert("olá, " + name + "! Seja bem-vindo ao site!");
}
function exercicio2(){
    var n1 = Number(document.form2.num1.value);
    var n2 = Number(document.form2.num2.value);
    var resultado;
    resultado = n1 + n2;

    alert("Resultado: "+ resultado);
}
function exercicio3(){
    var n1 = Number(document.form3.n1.value);
    var n2 = Number(document.form3.n2.value);

    var operacao = document.querySelector('input[name="operacao"]:checked').value;
    var resultado;

    if(operacao == "soma"){
        resultado = n1+n2;
        alert("Soma: "+ resultado);
    }
    else if(operacao == "subt"){
        resultado = n1-n2;
        alert("Subtração: "+ resultado);
    }
    else if(operacao == "mult"){
        resultado = n1*n2;
        alert("Multiplicação: "+ resultado);
    }
    else{
        resultado = n1/n2;
        alert("Divisão: "+ resultado);
    }
}
function exercicio4(){
    const numero1 = Number(prompt("Coloque seu número:"));

    if(numero1%2==0){
        alert(numero1 + " é par!!");
    }
    else{
        alert(numero1 + " é impar!!");
    }
}
function exercicio5(){
    var n1 = Number(document.form5.n1.value);
    var n2 = Number(document.form5.n2.value);
    var n3 = Number(document.form5.n3.value);
    var resultado;

    if(n1>=n2 && n1>=n3){
        if(n2>=n3){
            alert(n1 + " | " + n2 + " | " + n3);
        }
        else{
            alert(n1 + " | " + n3 + " | " + n2);
        }
    }
    else if(n2>=n1 && n2>=n3){
        if(n1>=n3){
            alert(n2 + " | " + n1 + " | " + n3);
        }
        else{
            alert(n2 + " | " + n3 + " | " + n1);
        }
    }
    else if(n3>=n1 && n3>=n2){
        if(n2>=n1){
            alert(n3 + " | " + n2 + " | " + n1);
        }
        else{
            alert(n3 + " | " + n1 + " | " + n2);
        }
    }
}
function exercicio6(){
    const numero1 = Number(prompt("Coloque a Temperatura em Cº: "));
    const fahrenheit = (numero1 * 9/5) + 32;
    
    alert(fahrenheit + "Fº");
}
function exercicio7(){
    var n1 = Number(document.form7.n1.value);
    var n2 = Number(document.form7.n2.value);
    var n3 = Number(document.form7.n3.value);
    var resultado = (n1+n2+n3)/3;

    if(resultado>=6){
        alert("Aprovado");
    }
    else{
        alert("Reprovado");
    }
}
var click=0;
function exercicio8(){
    click++;  

    document.querySelector("#click").innerText = 
    "clicks: " + click;
}
function exercicio9(){
    var idade = Number(prompt("Coloque a sua idade: "))

    if(idade>=18){
        document.querySelector("#exercicio9").innerText = 
    idade + " é maior de idade";
    }  
    else{
        document.querySelector("#exercicio9").innerText = 
    idade + " é menor de idade";
    }


}
var cliques = -1
function exercicio10(){
    cliques = cliques + 1

    var text1 = "lorem web design"
    var text2 = "deutschland ist ein schones land"

    if(cliques%2==0){
        document.querySelector("#exercicio10").innerText = 
    text1;
    }
    else{
        document.querySelector("#exercicio10").innerText = 
    text2;
    }
}
