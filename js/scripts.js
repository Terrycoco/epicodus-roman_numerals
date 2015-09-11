var toRoman = function(number) {
  if (number > 3999) { return false;}
  var result = "";
  var romans = [
    [1000,"M"],
    [500, "D"],
    [100, "C"],
    [50, "L"],
    [10, "X"],
    [5, "V"],
    [1, "I"]
  ];


for (var i=0; i < romans.length; i++) {
  while (number >= romans[i][0]) {
    result += romans[i][1];
    number -= romans[i][0];
  }
  if (i > 0) {
    var checkStr = romans[i][1]+romans[i][1]+romans[i][1]+romans[i][1];
    result = result.replace(checkStr, romans[i][1] + romans[i-1][1])
  }
}

  // // while (number >= 1000) {
  // //   result += "M";
  // //   number -= 1000;
  // // }
  //
  // while (number >= 500) {
  //   result += "D";
  //   number -= 500;
  // }
  //
  // while (number >= 100) {
  //   result += "C";
  //   number -= 100;
  // }
  //
  // while (number >= 50) {
  //   result += "L";
  //   number -= 50;
  // }
  //
  // while (number >= 10) {
  //   result += "X";
  //   number -= 10;
  // }
  // while (number >= 5) {
  //   result += "V";
  //   number -= 5;
  // }
  //
  // while (number >= 1) {
  //   result += "I";
  //   number -= 1;
  // }
  // result = result.replace("IIII", "IV");



  return result;


};
