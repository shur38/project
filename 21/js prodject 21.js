    // const hamburger = 5;
    // const fries = 0;
    // if (hamburger && fries){
    //     console.log('я сыт!');
    // }
    // console.log((hamburger && fries));
    // const hamburger = 3;
    // const fries = 1;
    // const cola = 1 ;

    // console.log(hamburger ===3 && cola && fries );
    // console.log(1  &&  0);
    // console.log(1  &&  5);
    // console.log(null  &&  5);
    // console.log(0  &&  "oll by write");



    //  if (hamburger ===3 && cola && fries ){  
    //     console.log('я сыт!');

    // }else{
    //     console.log('мы уходим в другую столовую');
    // }
   const hamburger = 3 ;
   const fries = 3;
   const cola =0;
   const nagets = 2;
   
   if (hamburger === 2 && cola === 2 || fries === 3 && nagets){
       console.log('oll by write ! ');
   }else{
       console.log('oll by not write!')
   }
   console.log((hamburger || fries || cola));

   let johnRaport , alexRaport , samRaport , marijaRaport = 'done';
   console.log( johnRaport || alexRaport || samRaport || marijaRaport);