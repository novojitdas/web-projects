
function doublePrint(word,num) {
      
      string = "";
      for(let i=0;i<num;i++){
            string += word;
      }

      return string;
}

let doublePrintEx = function(word,num) {
      string = "";
      for(let i=0;i<num;i++){
            string += word;
      }
      return string;
}

console.log(doublePrint('hi',3));
console.log(doublePrintEx('no',3));
