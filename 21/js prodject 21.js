//     const hamburger = 5;
//     const fries = 0;
//     if (hamburger && fries){
//         console.log('я сыт!');
//     }
//     console.log((hamburger && fries));
//     const hamburger = 3;
//     const fries = 1;
//     const cola = 1 ;

//     console.log(hamburger ===3 && cola && fries );
//     console.log(1  &&  0);
//     console.log(1  &&  5);
//     console.log(null  &&  5);
//     console.log(0  &&  "oll by write");



//      if (hamburger ===3 && cola && fries ){  
//         console.log('я сыт!');

//     }else{
//         console.log('мы уходим в другую столовую');
//     }
//    const hamburger = 3 ;
//    const fries = 3;
//    const colas =0;
//    const nagets = 2;
//    console.log((hamburger === 2 && cola === 2 || fries === 3 && nagets));
//    if (hamburger === 2 && cola === 2 || fries === 3 && nagets){
//        console.log('oll by write ! ');
//    }else{
//        console.log('oll by not write!')
//    }
//    console.log((hamburger || fries || cola));

//    let johnRaport , alexRaport , samRaport , marijaRaport = 'done';
//    console.log( johnRaport || alexRaport || samRaport || marijaRaport);

//    console.log(!0);

// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log(!1 && 2 || !3);

// console.log(25 || null && !3);

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || null && !3 || undefined || 5);

// console.log(5 === 5 && 3 > 1 || 5);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//  for (var i = 0; i < data.length; i++) {
//    if(typeof data[i]==="number"){
//     data[i]=data[i]*2;
// }else{
//        data[i]=data[i]+" - done";
//    }

// }   
// console.log(data)



function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const arr = [3, 5, 8, 16, 20, 23, 50];
   const arr1 =[];
   const ret = [];
   for (let i = 1;i<=arr.length;i++){
       arr1[i-1] = arr[arr.length-i];
   }
console.log(arr1);

 for( let j =1;j<=arr1.length;j++){
     ret[j-1]= arr1[arr1.length-1];

 }
 console.log(ret);
}