const sum = require('./sum')



test('should be the sum of two arguments',()=>{
    expect(sum(29,31)).toBe(60);
});

test('should be the sum of two arguments',()=>{
    expect(sum(55,14)).toBe(69);
});

test('should be the sum of two arguments',()=>{
    expect(sum(1027,17)).toBe(1044);
});