    const hamburger = 5;
    const fries = 0;
    if (hamburger && fries){
        console.log('я сыт!');
    }
    console.log((hamburger && fries));
    const hamburger = 3;
    const fries = 1;
    const cola = 1 ;

    console.log(hamburger ===3 && cola && fries );
    console.log(1  &&  0);
    console.log(1  &&  5);
    console.log(null  &&  5);
    console.log(0  &&  "oll by write");



     if (hamburger ===3 && cola && fries ){  
        console.log('я сыт!');

    }else{
        console.log('мы уходим в другую столовую');
    }
   const hamburger = 3 ;
   const fries = 3;
   const colas =0;
   const nagets = 2;
   console.log((hamburger === 2 && cola === 2 || fries === 3 && nagets));
   if (hamburger === 2 && cola === 2 || fries === 3 && nagets){
       console.log('oll by write ! ');
   }else{
       console.log('oll by not write!')
   }
   console.log((hamburger || fries || cola));

   let johnRaport , alexRaport , samRaport , marijaRaport = 'done';
   console.log( johnRaport || alexRaport || samRaport || marijaRaport);

   console.log(!0);

console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 || undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);