
// function firstTask() {
//   for (let i = 5; i < 11; i++) {
//       console.log(i);
//   }
// }

// firstTask()

// function secondTask() {
//   for (let i = 20; i >= 10; i--) {
//       if (i === 13) break;
//       console.log(i)
//   }
// }

// secondTask()

// function thirdTask() {
//   for (let i = 2; i <= 10; i++) {
//       if (i % 2 === 0) {
//           console.log(i);
//       }
//   }
// }

// thirdTask()

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
//   let i = 2;

//   while (i <= 16) {
//       if (i % 2 === 0) {
//           i++;
//           continue;
//       } else {
//           console.log(i);
//       }
//       i++;
//   }
// }

// fourthTask()

// function fifthTask() {
//   const arrayOfNumbers = [];

//   for (let i = 5; i < 11; i++) {
//       arrayOfNumbers[i - 5] = i;
//   }

//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }

// fifthTask()
function firstTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  // Пишем решение вот тут
  for (let i = 0; i < arr.length; i++) {
    result[arr] = i;

  console.log(result); 
  }
  // Не трогаем
  return result;
}

// Место для второй задачи
function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  // Пишем решение вот тут
  
  
  // Не трогаем
  return data;
}

// Место для третьей задачи
function thirdTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  // Пишем решение вот тут
  
  
  // Не трогаем
  return result;
}

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

// Пишем решение вот тут
for (let i = 1; i <= arr.length; i++) {
result[i - 1] = arr[arr.length -i];


}
console.log(result);
// Не трогаем
return result;
}
