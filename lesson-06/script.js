// 1. for Loop কী?
// একই কাজ বারবার করার জন্য for loop ব্যবহার করি।
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// 2.for loop এর structure
// for(start; conditon; update) {
//     // code block to be executed
// }

// 1 থেকে 10 পর্যন্ত
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// 3. 10 থেকে 1 পর্যন্ত

for(let i = 10; i >= 1; i--) {
    console.log(i);
}
// i = i - 1

// 4. 1 থেকে 10 পর্যন্ত even number
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0){
        console.log(i);
    }
}
//i % 2 === 0
// মানে number-টা 2 দিয়ে ভাগ করলে remainder 0।

// 4. 1 থেকে 10 পর্যন্ত odd number
for(let i = 1; i <= 10; i++) {
    if(i % 2 !== 0){
        console.log(i);
    }
}

// 5. Multiplication Table

const number = 10;
for(let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}


for (let i = 1; i <= 10; i++) {
    console.log(`${i} *  ${i} = ${i * i}`);
}