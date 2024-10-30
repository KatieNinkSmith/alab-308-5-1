const arr = [4, 11, 99, 3, 7];
// part 1 first bullet
function arrSum(x) {
  let sum = 0;
  for (i = 0; i < x.length; i++) {
    sum += x[i]; //adds all the index numbers to sum
  }
  return sum;
}
// console.log(arrSum(arr));
// part 1 second bullet
function arrAvg(x) {
  let sum = 0;
  for (i = 0; i < x.length; i++) {
    sum += x[i]; //adds all the index numbers to avg
  }
  return sum / x.length;
}
// console.log(arrAvg(arr));

// part 1 thrid bullet
const strArr = ["hello", "animal", "cup", "computer"]; // arguments

function strLongest(x) {
  let myStr = "";
  for (i = 0; i < x.length; i++) {
    if (myStr.length < x[i].length) {
      myStr = x[i];
    }
  }
  return myStr;
}
let rslt = strLongest(strArr); // telling the computer what to do
// console.log(rslt); // outputing for us to see

// part 1 forth bullet
const strArr2 = ["six", "desk", "hopscotch", "pickles"];
const strArr3 = ["say", "hello", "in", "the", "morning"];
//             x,y are parameters
function newArr(x, y) {
  let arr = []; // makes a new array to put the arugments that are longer then y(number)
  for (i = 0; i < x.length; i++) {
    if (x[i].length > y) {
      // checking the length of each arugment and if its shorter then y(number)
      arr.push(x[i]); // pushes the strings longer then the y(number) into the array
    }
  }
  return arr;
}
// console.log(newArr(strArr3,3));

// part 1 fifth bullet
let n = 3;
// function count(x,y){
//   let n = 0;
//   n++;
//   if (n<=y)
//   console.log(x-(x-1));

// }

function countN(x, y) {
  // console.log(x - (y - 1)); // this is n - one less then n
  if (y > 1) {
    countN(x, y - 1); // this is continuing n - (n-one less then n)
  }
}
// console.log(countN(n, ));
countN(n, n);

// ===========part 2==============
const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// part 2 first bullet
function byAge(arr) {
  // arr lets you know your pulling in array
  // let newArr = [...data] // creates a copy for later use
  return data.sort((a, b) => {
    // changes original array foreverrrrr
    return a.age - b.age;
  });
}
// console.log(byAge(data));

// part 2 second bullet
// data.pop() times 2 easy way out :P
// console.log(data);

function under50(arr, maxAge) {
  let filterArr = arr.filter(function (person) {
    // creates a filter with an option for any maxage input
    return person.age <= maxAge;
  });
  filterArr.sort(function (a, b) {
    // sorts the objects of the array from youngest to oldest
    return a.age - b.age;
  });
  // part 2 third bullet
  let updatedArr = filterArr.map(function (person) {
    // filter allows you to return with an object key having a new name
    return {
      id: Number(person.id),
      name: person.name,
      job: person.occupation,
      age: Number(person.age) + 1, // adding 1 to each age
    };
  });
  return updatedArr;
}
const dataSorted = under50(data, 50);
// console.log(dataSorted);
// [
//   { id: 57, name: 'Bob', job: 'Fry Cook', age: 20 },
//   { id: 48, name: 'Barry', job: 'Runner', age: 26 },
//   { id: 42, name: 'Bruce', job: 'Knight', age: 42 }
// ] our new array we are working with

// part 2 forth bullet
let ageArr = dataSorted.map(function (person) {
  // sorts out just the age input
  return Number(person.age);
});

// console.log(ageArr);

const sumOfAge = ageArr.reduce((sum, age) => {
  // adds all the age inputs in our new array for age
  return sum + age;
}, 0);
// console.log(sumOfAge);

// part 2 fifth bullet
let avg = sumOfAge / ageArr.length; // divides the average age but the length of the age array
// console.log(avg);

// ================= part 3 ==========================
const family = [
  { name: "Katie", who: "Mom", color: "Purple" },
  { name: "Rob", who: "Dad", color: "Green" },
  { name: "Lance", who: "Oldest son", color: "Black and Purple" },
  { name: "Wyatt", who: "Middle son", color: "Black and Red" },
  { name: "Gerald", who: "Youngest son", color: "Orange" },
  { name: "Imogen", who: "Baby daughter", color: "Unicorn rainbow" },
];
// pushing in an age key with the value for each object
family[0].age = 35;
family[1].age = 42;
family[2].age = 14;
family[3].age = 13;
family[4].age = 11;
family[5].age = 2;

// console.log(family);
//[
//   { name: 'Katie', who: 'Mom', color: 'Purple', age: 35 },
//   { name: 'Rob', who: 'Dad', color: 'Green', age: 42 },
//   { name: 'Lance', who: 'Oldest son', color: 'Black and Purple', age: 14 },
//   { name: 'Wyatt', who: 'Middle son', color: 'Black and Red', age: 13 },
//   { name: 'Gerald', who: 'Youngest son', color: 'Orange', age: 11 },
//   { name: 'Imogen', who: 'Baby daughter', color: 'Unicorn rainbow', age: 2 }
//]
family.sort((a, b) => a.age - b.age); // sort by are smallest to largest relized i didn't need to do this but im leaving it!!
// console.log(family);

// part 3 first and second bullet
const copyOfFamilyInOneYear = family.map(function (obj) { // map to the age key for each obj and increment by 1
  return {
    name: obj.name,
    who: obj.who,
    color: obj.color,
    age: Number(obj.age) + 1,
  };
});

// console.log(copyOfFamilyInOneYear);

// [
//   { name: "Imogen", who: "Baby daughter", color: "Unicorn rainbow", age: 3 },
//   { name: "Gerald", who: "Youngest son", color: "Orange", age: 12 },
//   { name: "Wyatt", who: "Middle son", color: "Black and Red", age: 14 },
//   { name: "Lance", who: "Oldest son", color: "Black and Purple", age: 15, },
//   { name: "Katie", who: "Mom", color: "Purple", age: 36 },
//   { name: "Rob", who: "Dad", color: "Green", age: 43 },
// ];
// family.updated_at()
// console.log(family);

const date = new Date();
// console.log(date);
// console.log(Math.floor(Date.now()/1000));
// 2024-10-30T04:55:29.503Z
// 1730264585676

// part 3 third bullet
const familyAgeToday = [
  { name: 'Katie', age: '35' },
  { name: 'Robert', age: '42' },
  { name: 'Lance', age: '14' },
  { name: 'Wyatt', age: '13' },
  { name: 'Gerald', age: '11' },
  { name: 'Imogen', age: '2' }
]

const familyAgeTodayTS = familyAgeToday.map(function (obj) { // map to the age key for each obj and increment by 1
  return {
    name: obj.name,
    age: Number(obj.age),
    updated_at: (new Date())
  };
});

// [
//   { name: 'Katie', age: 35, updated_at: 2024-10-30T05:32:53.525Z },
//   { name: 'Robert', age: 42, updated_at: 2024-10-30T05:32:53.525Z },
//   { name: 'Lance', age: 14, updated_at: 2024-10-30T05:32:53.525Z },
//   { name: 'Wyatt', age: 13, updated_at: 2024-10-30T05:32:53.525Z },
//   { name: 'Gerald', age: 11, updated_at: 2024-10-30T05:32:53.525Z },
//   { name: 'Imogen', age: 2, updated_at: 2024-10-30T05:32:53.525Z }
// ]

// console.log(familyAgeTodayTS);
