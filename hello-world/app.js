console.log('Hello world');

const helloWorld2 = () => {
  console.log('Hello world 2');
};

function helloWorld3() {
  console.log('Hello World 3');
}

const helloWorld4 = num => {
  console.log('Hello world ' + num);
};

const helloWorld5 = str => {
  const splitString = str
    .split('')
    .reverse()
    .join('');
  console.log(splitString);
};
helloWorld2();
helloWorld3();
helloWorld4(4);
helloWorld5('5 dlroW olleH');

// just saying hello world in a bunch of ways for fun
