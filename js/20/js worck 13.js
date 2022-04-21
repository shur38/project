// if (4==9){
//     console.log('ok!');

// }else{
// console.log('error!');
// }

const nam = 50;
if (nam<33){
    console.log('error!');
}else if (nam > 100){
    console.log('много');
}else{
    console.log('ok!')
}
(nam ===50) ? console.log('ok!') : console.log('Error');

const nam =50;

switch (nam){
    case 49:
        console.log('wrong');
        break;
        case 100:
            console.log('wrong');
            break;
            case 50:
            console.log('this true');
            break;
            default:
                console.log('true ok!');
                break;
}