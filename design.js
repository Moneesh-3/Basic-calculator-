function add(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("op").textContent=a+b;

}
function sub(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("op").textContent=a-b;
}
function mul(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("op").textContent=a*b;
}
function Div(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("op").textContent=a/b
}