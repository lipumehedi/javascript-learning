// Javascript Data Types

// 1. String
// Text/data লিখলে String হয়।

const nam = "Mehedi";
const country = 'Bangladesh';
console.log(nam);
console.log(country);
// String সাধারণত " " বা ' ' এর মধ্যে লেখা হয়।


// 2. Number
// Number হলো সংখ্যা। Number এর মধ্যে Integer, Float, Double ইত্যাদি থাকে। 

const age = 25;
const height = 5.9;
const salary = 50000;
    
console.log(age);
console.log(height);
console.log(salary);
// Number সাধারণত কোনো উদ্দেশ্যে লেখা হয়।
//JavaScript-এ Python-এর মতো আলাদা int এবং float নেই। সাধারণভাবে দুটোই Number।

// 3. Boolean
// Boolean হলো True বা False।

const isMarried = false;
const isStudent = true;
console.log(isMarried);
console.log(isStudent);


// 4. undefined
// কোনো variable তৈরি করা হয়েছে কিন্তু value দেওয়া হয়নি, তাহলে undefined হতে পারে।

let job;
console.log(job); // undefined

// 5. null
// null হলো কোনো variable এর value নেই।
let phone = null;
console.log(phone); // null

// undefined → value দেওয়া হয়নি
// null      → ইচ্ছা করে empty রাখা হয়েছে

// typeof 
// typeof হলো variable এর data type বের করার জন্য ব্যবহৃত হয়।
console.log(typeof nam); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof job); // undefined
console.log(typeof phone); // object




console.log(`Name: ${nam}`);
console.log(`Age: ${age}`);
console.log(`Country: ${country}`);
console.log(`Salary: ${salary}`);
console.log(`Learning JavaScript: ${isStudent}`);

console.log(typeof nam);
console.log(typeof age);
console.log(typeof country);
console.log(typeof salary);
console.log(typeof isStudent);
console.log(typeof job);
console.log(typeof phone);