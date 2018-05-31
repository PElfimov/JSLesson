function getRndNumber(){
  return Math.floor((Math.random() * 6) + 1);;
};

function printLine(id, string){
  document.getElementById(id).innerHTML += string + "</br>";
};

function isNumbersEqual(first, second) {
  if (first == second) {
    string = "Выпал дубль. Число " + first;
    printLine("result", string);
  }
  if (first < 3 && second > 4 ) {
    var summ = second - first;
    string = "Большой разброс между костями. Разница составляет" + summ;
    printLine("result", string);

  }
};

var total = 0;
for (var i = 0; i < 15; i++) {
  var first = getRndNumber();
  var second = getRndNumber();
  if (i==8 || i==13)  continue ;
  var string = "Первая кость:" + first + " Вторая кость:" + second
  printLine("result", string);
  isNumbersEqual(first, second);
   
   total += first + second;

}

total > 100 ? string= "Победа, вы набрали "+total+" очков": string= "Вы проиграли, у вас "+total+ " очков";
printLine("result", string);
