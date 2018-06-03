var btn = document.getElementById("play");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player1Result, player2Result;

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function getNameById(id) {
  var text=null;
  id == 1 ? text = "Камень":0;
  id == 2 ? text = "Ножницы":0;
  id == 3 ? text = "Бумага":0;
  return text;
}

function determineWinner(result1, result2){
  var resultSumm;
  var winner;
  result1=String(result1);
  result2=String(result2);
  resultSumm=result1+result2;
  console.log(resultSumm);
  switch (true) {
    case resultSumm=="12":
      winner=1;
      break;
    case resultSumm=="13":
      winner=2;
      break;
    case resultSumm=="21":
      winner=2;
      break;
    case resultSumm=="23":
      winner=1;
      break;
    case resultSumm=="31":
      winner=1;
      break;
    case resultSumm=="32":
      winner=2;
      break;
  }
  return winner;
}

function printResult(idPlaers){
  var text;
  idPlaers == 1? text = "первый": text = "второй";
  return "Выиграл "+ text + " игрок";
}

function runGame() {
  for (var i = 0; i>=0; i++) {
    player1Result=getPlayerResult();
    player2Result=getPlayerResult();
    if (player1Result!=player2Result) { break}
  }
    player1.innerHTML = getNameById(player1Result);
    player2.innerHTML = getNameById(player2Result);
    result.innerHTML = printResult(determineWinner(player1Result,player2Result));



}



btn.addEventListener("click", runGame);
