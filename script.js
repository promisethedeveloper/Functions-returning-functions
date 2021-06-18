function greet(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`)
  }
}


const greeter = greet('Hello');
greeter('Promise');
greeter("Onyeka");

greet('Hi')("Promise");

// Arrow functions
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
  

// const greeter = greetArr('Hello');
// greeter('Promise');
// greeter("Onyeka");

// greetArr('Hi')("Promise");