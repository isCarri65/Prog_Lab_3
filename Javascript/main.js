console.log("Computadora");
const list1 = {num1: 1, num2:2};
list1["num3"] = 3;
console.log(list1);

test('agregando un numero positivo que no sea 0', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });