describe('the add method', function(){
  it('will add numbers correctly', function(){
     expect(Calculator.add(2,3)).toEqual(5);
  });
});

describe('the subtract method', function(){
  it('will subtract numbers correctly', function(){
     expect(Calculator.sub(5,3)).toEqual(2);
  });
});