/*var nome = "Alexandre Cid" 

alert("bem vindo " + nome);
var n1 = 12;
var nw = 5;
var frase = "Agro é pop";
console.log(frase.replace("Agro","o Papa"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());*/

/*var lista = ["maçã", "laranja", "pera"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));*/

/*var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/
/*
var frutas = [{nome: "maçã", cor: "vermelha"} , {nome: "uva" , cor:"roxa"}];
console.log(frutas);
console.log(frutas[0].nome);
*/
/*
var idade = prompt("qual sua idade?");
if(idade>18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}*/

/*var count = 5;
while(count <=5){
    console.log(count);
    count++;
}

for(var i = 0 ; i<count ; i++){
    console.log(count * i);
}*/

/*
var d = new Date();
console.log(d.getMonth()+1);
console.log(d.getMinutes());
console.log(d.getHours());
*/
/*
function soma (n1, n2){
    return n1+n2;
}

alert(soma(5, 2));

function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true;
    }else{
        validar=false;
    }
    return validar;
}
console.log(validaIdade(prompt("qual dua idade?")));*/


function clicar(){
   // alert("obrigado por clicar");
    document.getElementById("agradecimento").innerHTML="Obrigado por Clicar";
}
function redirecionar(){
    window.open("https://github.com/CidAlexandre");
   // window.location.href="https://github.com/CidAlexandre";
}
function trocaTexto(elemento){
  //  document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
  elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="passe o mouse aqui";
    elemento.innerHTML="passe o mouse aqui";
}
function onLoad(){
    alert("página carregada");
}

function change(elemento){
    console.log(elemento.value);
}