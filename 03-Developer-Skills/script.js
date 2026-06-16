// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// console.log('Hetuu');
// console.log('heyy!!');
// let hr = 1501;
// console.log(hr);
// console.log('HR is best');

// let temperatures = [2, 5, -1, 4, 6, 7, 'error', 8, 11, 12, 17, -4, -6, 19];

// const calcAmplitude = function (temps) {
//   let min = temps[0],
//     max = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] < min) min = temps[i];
//     if (temps[i] > max) max = temps[i];
//   }

//   // console.log(min, max);
//   return max - min;
// };

// console.log(calcAmplitude(temperatures));

// const arr1 = [1, 2, 3, 4, 8];
// const arr2 = [6, 8, 9, 10, 42];

// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// console.log('sd');

// const temp = prompt('Enter celcius value:');

// const kelvin = temp + 273;
// console.log(kelvin);

const measurements = {
  type: 'temperature',
  unit: 'celsius',
  value: number(prompt('Enter celsius')),

  calcKelvin: function (value) {
    this.kelvin = 273 + this.value;
  },
};

calcKelvin(5);
