//  let welcome = 'welcome';

//  console.log(welcome)

//  if (5 === 5){
//      console.log('yes')
//  }

// let state = 'FL';

// let taxPercent = 0;

// if (state === 'FL'){
//     taxPercent = 7;
// }
// else if (state === 'NY'){
//     taxPercent = 8.754;
// }

// console.log(taxPercent);

// ternary operator
// let price = 5;
// let message = (price > 10) ? 'expensive' : 'cheap';
// console.log(message);

// let price = 5;
// (price > 10) ? console.log('yes') : console.log('no');

// let count = 1;

// while (count < 5){
//     console.log(count);
//     count++;
// }
 

// let count = 1;

// do{
//     console.log(count);
//     count++;

// }
// while(count < 5);


// function showCounter(){
    
//     for (i = 0; i < 5; i++){
//         console.log(i);
//     }

//     }
// showCounter();


// let myFunction = function(message,firstName){
//     console.log(message);
//     console.log(firstName);

// }


// myFunction('hello','john');

// function getScoreCode(value){
//     let code = value * 42;
//     return code;
// }
// let answer = getScoreCode(2);
// console.log(answer);

//an object
// let person = {
//     name:'peter',
//     age: 34,
//     partime: false,
//     showinfo:function(realAge){
//         console.log(this.name + 'is' + realAge);
//     }
// }
// person.showinfo(34);


// let now = new Date();
// console.log(now.toDateString());

// const values = ['a','b','c'];

// console.log(values);

//changing the value of array
//  values[0] = 'aaa';
// console.log(values[0]);
// console.log(values[1]);
 
//manipulating arrays

// const values = ['a','b','c']
// const first = values.shift();
// console.log(first);
// console.log(values);

// const values = ['b','c'];
// values.unshift('a');
// console.log(values);

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(4, 0,'Feb');
// console.log(months);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(function(word){
//     return word.length > 6;
// });

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(function(item){
//     return item > 7;
// });

const item = [2,4,6,7,9];
const Doubled = item.forEach(function(element){
    console.log(element);
    
});