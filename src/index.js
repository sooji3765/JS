const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squred = [];

// for(let i=0;i<array.length;i++){
//   squred.push(array[i]*array[i]);
// }

array.forEach(n => {
  squred.push(n * n);
});

console.log(squred);

// 변수와 상수

//변수 선언
let value = 1;

console.log(value);

value = 2;
console.log(value);

//상수 선언
const a = 1;
console.log(a);

//var << 키워드 쓰는 일이 없어짐

let text = "hello";
let name = "hih";

let good = null;
let up = undefined;

let friend = null;
let criminal;

// 값을 지정하지 않음
console.log(criminal);

// switch case

const device = "nn";

switch (device) {
  case "iphone":
    console.log("iphone");
    break;
  case "ipad":
    console.log("ipad");
    break;

  default:
    console.log("nothing");
}
