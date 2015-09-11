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



  return result;


};
