const select = document.querySelector('select');
const para = document.querySelector('p');

select.onchange = setWeather;

function setWeather() {
  const choice = select.value;

  if(choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if(choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if(choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if(choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines -i; j++) {
        result += " ";
    }
  for (let j = 0; j < 2 * i + 1; j++) {
       result += "*";
 }
    result += "\n";

  }
console.log(result)

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines -i; j++) {
        result += "+";
    }
  // for (let j = 0; j < 2 * i + 1; j++) {
  //      result += "*";
 
    result += "\n";

  }
console.log(result)

// *
// **
// ***
// ****
// *****
// ******
