var btn = document.getElementById("play");

function getNewArr(arr){
  var count = 8;
  var newArr = [];
  arr.forEach(function(item, index){
    var newObj ={};
    for (var key in item) {
      if (key == "id") {continue}
      newObj[key]=item[key];
      }
    if(count>index){
      newArr.push(newObj);
    }
  })
  return newArr;
}

function transform() {
    var newArr = getNewArr(data);



   /*
   ваша программа
   по возможности разбейте на функции
   */


    console.log(data);
    console.log(newArr);
}



btn.addEventListener("click", transform);
