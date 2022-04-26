// let num =50;
// while(num<=55){ 
//     console.log(num);
//     num++;
// } 
// do{
//     console.log(num);
//     num++;
// }
// while(num<=55);
// for(let i =1; i <= 10; i++){
//     if(i===6) {
//         // break;
//         continue;
//     }
//     console.log(i);
    
// } 
// let r = 0;
// while (r++   < 5){
//     console.log( r );
    
// } 

// let i = 0;
// while (i++ < 5) console.log( i );


//     for (number =0;number < 100; number++){
//      console.log(number);
      


        
//       }
// for (let i = 0; i < 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 !==1) continue;
  
//     console.log(i); // 1, затем 3, 5, 7, 9

} //   }
for (i = 0; i < 3; i++) {

  for (j = 0; j < 3; j++) {
    console.log(j, i);

  }
  let resuit = '';
  const lenght = 7;
  for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
      resuit += '*';
    }
    resuit += '\n'
  }
  console.log(resuit)
  first: for (i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (j = 0; j < 3; j++) {
      console.log(`Second level: ${j}`);
      for (k = 0; k < 5; k++) {
        if (k === 2) break first;// or continue
        console.log(`Third level: ${k}`);

      }
    }
  }