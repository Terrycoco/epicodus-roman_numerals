// describe('leapYear', function() {
//   it("is false for a year that is not divisible by 4", function() {
//     expect(leapYear(1999)).to.equal(false);
//   });
// });

describe('toRoman', function() {
   this.timeout(10000);
  it("returns M for thousand", function(){
    var re = new RegExp('M');
    expect(toRoman(1000).search(re)).to.equal(0);
  });

  it ("returns MM for 2 thousand" , function() {
    var re = new RegExp("MM");
    expect(toRoman(2000).search(re)).to.equal(0);
  });

  it ("returns MMM for 3 thousand" , function() {
    var re = new RegExp("MMM");
    expect(toRoman(3000).search(re)).to.equal(0);
  });

  it ("returns D for 500", function() {
    var re = new RegExp("D");
    expect(toRoman(500).search(re)).to.equal(0);
  });

  it ("returns MD for 1500", function() {
    var re = new RegExp("MD");
    expect(toRoman(1500).search(re)).to.equal(0);
  });

  it ("returns MDC for 1600", function() {
    var re = new RegExp("MDC");
    expect(toRoman(1600).search(re)).to.equal(0);
  });

  it ("returns MDC for 1800", function() {
    var re = new RegExp("MDCCC");
    expect(toRoman(1800).search(re)).to.equal(0);
  });

  it ("returns CCC for 300", function() {
    var re = new RegExp("CCC");
    expect(toRoman(300).search(re)).to.equal(0);
  });

  it ("returns L for 50", function() {
    var re = new RegExp("L");
    expect(toRoman(50).search(re)).to.equal(0);
  });

  it ("returns X for 10", function() {
    var re = new RegExp("X");
    expect(toRoman(10).search(re)).to.equal(0);
  });

  it ("returns V for 5", function() {
    var re = new RegExp("V");
    expect(toRoman(5).search(re)).to.equal(0);
  });

  it ("returns III for 3", function() {
    var re = new RegExp("I");
    expect(toRoman(3).search(re)).to.equal(0);
  });

  it ("returns IV for 4", function() {
    var re = new RegExp("IV");
    expect(toRoman(4).search(re)).to.equal(0);
  });
});
