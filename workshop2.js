const greetings = 'Hi';

console.log(`${greetings}, welcome to the workshop!`);
console.log("11 " + 11);

//boolean
const imiESomn = true;

//undefined
let variabilaTest;
console.log(variabilaTest);

//null
let variabilaTest2 = null;
console.log(variabilaTest2);

function foo(a) {
    console.log(a);
}
console.log("foo:");
foo(9);
foo();
foo(null);
console.log(5 === '5'); 

console.log('------------');

const userGol = {
};

const user = {
    name: 'Spafiu',
    age: 30,
    hobbies: ['gym', 'grills', 'hiking']
}
user.address = 'some street';
console.log(user);
delete user.isAdmin;

const altUser = user;

console.log(altUser);

const goodCopie = {...user}; //ia tot din interioru obiectului, dar nu referinta, sa nu se schimbe amandoua obiectele cand modificam ceva din unul din ele

const obj = {
    a: {
        b: {
            c: 42
        }

    }
}
console.log(obj.a.b.c);
const fruits = [];
fruits.push('apple', 'banana', 'pear');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.slice(0, 1)
console.log(fruits);
