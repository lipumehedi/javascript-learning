// 1. if কী?
// if মানে: যদি condition সত্য হয়, তাহলে এই code চালাও।

const age = 30;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// 2. if এর Structure
/*
if (condition) {
    // code to be executed if condition is true
}   
*/
 
if (age >= 33) {
    console.log("Adult.");
}
//যেহেতু 30 >= 33 হলো false, তাই কিছু print হবে না।

// 3. else  
    // যদি if false হয়, তাহলে অন্য code চালাও।

if (age >= 33) {
    console.log("Adult.");
} else {
    console.log("Not Adult.");
}

// 4. if + else

const password = "123456";
if (password === "123456") {
    console.log("Login successful.");
} else {
    console.log("Login failed.");
}

// 5. else if 
// যখন multiple conditions check করতে হবে, তখন else if ব্যবহার করি।

if (age < 18) {
    console.log("You are a child.");
}    else if (age < 60) {
    console.log("You are an adult.");
}   else {
    console.log("You are a senior citizen.");
}

// 6. Multiple else if 

const marks = 85;

if (marks >= 90){
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
}   else if (marks >= 70) {
    console.log("Grade C");
}   else if (marks >= 60) {
    console.log("Grade D");
}   else {
    console.log("Fail");
}       

// 7. Comparison + if

const salary = 350000;
if (salary >= 300000) {
    console.log("Salary is 300,000 or more.");
} else {
    console.log("Salary is less than 300,000.");
}

// 8. Boolean + if 

const islearning = true;
if (islearning) {
    console.log("Keep learning!");
} else {
    console.log("Stop learning!");
}

// 9. if + &&
// && মানে: AND। যদি দুইটা condition সত্য হয়, তাহলে code চালাও।

const age1 = 25;
const hasID = true;
if (age1 >= 18 && hasID === true) {
    console.log("You can enter the club.");
} else {
    console.log("You cannot enter the club.");
}
 // easy way remember:
// age >= 18          → true
// hasLicense == true → true
// true AND true      → true 

// 10. if + ||
// || মানে: OR। যদি দুইটা condition এর মধ্যে যেকোনো একটি সত্য হয়, তাহলে code চালাও।
const isRaining = true;
const hasUmbrella = false;

if (isRaining || hasUmbrella) {
    console.log("You can go outside.");
} else {
    console.log("You cannot go outside.");
}

// true OR false → true

// ! NOT 
// ! মানে: NOT। যদি condition সত্য হয়, তাহলে false হবে। আর যদি condition false হয়, তাহলে true হবে।

const isworking = false;
if (!isworking) {
    console.log("You are not working.");
}