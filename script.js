Grafico();
function Grafico(){

  new TradingView.widget(
  {
    "autosize": "true",
    "symbol": "NASDAQ:AAPL",
    "interval": "D",
    "timezone": "America/Sao_Paulo",
    "theme": "dark",
    "style": "3",
    "locale": "br",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "details": true,
    "container_id": "Graf"
  } );
 
}

document.getElementById('btn').onclick = copy;

ar = [];

var original = document.getElementById('Graf');

function copy(){
  for(i = 0; i<= 10; i++) {
    if (ar[i] == undefined){
      var clone = original.cloneNode(true); // "deep" clone   
      original.parentNode.appendChild(clone); 
      ar[i] = "Graf" + i;
      clone.id = ar[i]; 
      //document.getElementById("resultado").innerHTML = ar[i]; 
      console.log(ar);
      break;
    }
  } 
} 

document.getElementById('betn').onclick = del;

function del(){
  var teste = document.getElementById('number').value;
  var teste1 = "Graf" + teste; 
  ar.splice(teste, 1);
  console.log(ar);
  //document.getElementById("resultado1").innerHTML = teste; 
  document.getElementById(teste1).remove();
  
  for(i = 0; i<= 10; i++) {
    if (ar[i] == undefined){      
      break;
    }
    else{
      ar[i] = "Graf" + i;
    }
  }
  console.log(ar); 
}