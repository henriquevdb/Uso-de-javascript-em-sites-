function mostrarMsg(){
    alert('Henrique Van Den Boom \nInstituto Federal Catarinense');
}
function soma(){
    const a = Number (prompt("Digite o numero 1: "));
    const b = Number (prompt("Digite o numero 2: "));

    const total = a + b;

    document.querySelector("#resultado").innerText = 
    "Resultado: " + total;
}
function subtracao(){
    const a = Number (prompt("Digite o numero 1: "));
    const b = Number (prompt("Digite o numero 2: "));

    const total = a - b;

    document.querySelector("#resultado1").innerText = 
    "Resultado: " + total;
}
function multiplicacao(){
    const a = Number (prompt("Digite o numero 1: "));
    const b = Number (prompt("Digite o numero 2: "));

    const total = a * b;

    document.querySelector("#resultado2").innerText = 
    "Resultado: " + total;
}
function divisao(){
    const a = Number (prompt("Digite o numero 1: "));
    const b = Number (prompt("Digite o numero 2: "));

    const total = a / b;

    document.querySelector("#resultado3").innerText = 
    "Resultado: " + total;
}
function somar1(){
    var n1 = Number (document.form1.num1.value);
    var n2 = Number (document.form1.num2.value);

    var operacao = document.querySelector('input[name="operacao"]:checked').value;
    var resultado;

    if(operacao == "soma"){
        resultado = n1+n2;
        alert("Soma: "+ resultado);
    }
    else{
        resultado = n1-n2;
        alert("Subtração: "+ resultado);
    }
}