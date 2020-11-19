describe("Life Path Number", function(){
  it ("Life Path Number - Albert Einstein", function(){
      Test.assertEquals(lifePathNumber("1879-03-14"), 6) 
  });
  
  it ("Life Path Number - Ada Lovelace", function(){
      Test.assertEquals(lifePathNumber("1815-12-10"), 1)
  });
  
  it ("Life Path Number - Brendan Eich", function(){
      Test.assertEquals(lifePathNumber("1961-07-04"), 1) 
  });
  
  it ("Life Path Number - Bill Gates", function(){
      Test.assertEquals(lifePathNumber("1955-10-28"), 4) 
  });
  
  it ("Life Path Number - Leonardo da Vinci", function(){
      Test.assertEquals(lifePathNumber("1452-04-15"), 4) 
  });

  it ("Life Path Number - Charles Babbage", function(){
      Test.assertEquals(lifePathNumber("1791-12-26"), 2) 
  });

  it ("Life Path Number - Grace Hopper", function(){
      Test.assertEquals(lifePathNumber("1906-12-09"), 1) 
  });
  
  it ("Life Path Number - Alan Turing", function(){
      Test.assertEquals(lifePathNumber("1912-06-23"), 6) 
  });
  
  it ("Life Path Number - Steve Wozniak", function(){
      Test.assertEquals(lifePathNumber("1950-08-11"), 7) 
  });
  
  it ("Life Path Number - Guido van Rossum", function(){
      Test.assertEquals(lifePathNumber("1956-01-31"), 8) 
  });
  
  it ("Life Path Number - Yukihiro Matsumoto", function(){
      Test.assertEquals(lifePathNumber("1965-04-14"), 3) 
  });
  
  it ("Life Path Number - Elon Musk", function(){
      Test.assertEquals(lifePathNumber("1971-06-28"), 7) 
  });
});