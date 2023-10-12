// ex-4
//debugger;
/*
let strInput1 = prompt("Nhập dẫy số:");
let arr1 = strInput1.split(",");
let sum = Number(arr1[0]);
for (let i = 1; i < arr1.length; i++) {
  sum += Number(arr1[i]);
}
alert(`The Sum of them is: ${sum}`);
*/

// ex-5
/*
let strInput2 = prompt("Nhập dẫy số:");
let arr2 = strInput2.split(",");
let min = Number(arr2[0]);
for (let j = 0; j < arr2.length; j++) {
  if (min > Number(arr2[j])) {
    min = arr2[j];
  }
}
alert("Min number: " + min);
*/

// ex-6
/*
let arr3 = [1, 2, 3, 4, 5];
let number = +prompt("Nhập số bạn ơi:");
let check = false;
let index = 0;
for (let i = 0; i < arr3.length; i++) {
  if (number === arr3[i]) {
    check = true;
    index = i;
    break;
  }
}
if (check) {
  alert(`${number} được tìm thấy trong array tại index ${index}`);
} else {
  alert(`${number} không tìm thấy trong mảng`);
}
*/

// ex-7
//debugger;
let arr7 = [5, 7, 300, 90, 24, 50, 75];
let max = arr7[0];
let index1 = 0;
let index2 = 0;

console.log("hế nhô đây là kích thước ban đầu:");
console.log(arr7);

// start tìm max
//let max = Math.max(...arr7);
for (let i = 0; i < arr7.length; i++) {
  if (max < arr7[i]) {
    max = arr7[i];
    index1 = i;
  }
}
console.log(`kích thước con cừu lớn nhất là: ${max}, thịt nó`);
// end tìm max

//index2 = arr7.indexOf(max);
arr7[index1] = 8;
console.log(`kích thước đàn cừu sau khi cạo lông: `);
console.log(arr7);

//loop
for (let x = 1; x < 4; x++) {
  max = 0;
  console.log(`Lần: ${x}`);
  for (let j = 0; j < arr7.length; j++) {
    arr7[j] += 50;
  }
  console.log("kích thước đàn cừu tăng sau mỗi tháng:");
  console.log(arr7);

  // start tìm max
  for (let i = 0; i < arr7.length; i++) {
    if (max < arr7[i]) {
      max = arr7[i];
      index1 = i;
    }
  }
  console.log(`Bây giờ kích thước con cừu lớn nhất là: ${max}, thịt nó`);
  // end tìm max

  //index2 = arr7.indexOf(max);
  arr7[index1] = 8;
  console.log(`kích thước đàn cừu sau khi chén nó: `);
  console.log(arr7);
}

// tính SUM kích thước
let sum = arr7[0];
for (let y = 1; y < arr7.length; y++) {
  sum += arr7[y];
}
console.log(`Đàn của tôi có tổng kích thước: ${sum}`);
console.log(`tôi sẽ lấy ${sum} * 2$ = ${sum * 2}`);
