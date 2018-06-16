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

var newDate = function(date){
  var tmpDate = new Date(date);
  return tmpDate.getFullYear() + "/" +
        tmpDate.getMonth() + "/" +
        tmpDate.getDate() + " " +
        tmpDate.getHours() + ":" +
        tmpDate.getMinutes();
}


function changeArr (arr){
  var chArr = arr.map (function(item){
      var newObj ={};
      for (var key in item) {
        if (key=="name") {
            newObj[key]=item[key].toLowerCase();
            newObj[key] = newObj[key][0].toUpperCase() + newObj[key].substring(1);
        }
        if (key=="url") {
            newObj[key] = "http://"+item[key];
        }
        if (key=="description") {
            newObj[key] = item[key].substring(0,15)+"...";
        }
        if (key=="date") {
            newObj[key] = newDate(item[key]);
        }
        if (key=="params") {
            newObj[key] = item[key].status + "=>" + item[key].progress;

        }
      }
      return newObj;
  });
  return chArr;
}

function print(arr){
  var str = "";
  arr.forEach(function(item, index){
    str += "</br>"+"номер записи " + index + "</br>";
    for (var key in item) {
      str += key +" = "+ item[key] + "</br>";
      }

  });
  result.innerHTML=str;
  console.log(str);
};


function transform() {
    var newArr = getNewArr(data);
    var itemArr=changeArr(newArr);
    print(itemArr);



    console.log(data);
    console.log(newArr);
    console.log(itemArr);
}



btn.addEventListener("click", transform);
