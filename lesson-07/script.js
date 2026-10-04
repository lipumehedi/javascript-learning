// 1. while loop কী?

// while loop একটি control flow statement যা একটি নির্দিষ্ট condition সত্য (true) হওয়া পর্যন্ত code block execute করে।
 // basic structure:
 /*
while (condition) {
    // code block to be executed
}
 */

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
 /*
 i = 1
 ↓
i <= 5 ? → Yes → print
 ↓
i++
 ↓
আবার condition check
 ↓
...
 ↓
i = 6 → condition false → stop
 */

// 2. 1 থেকে 10 পর্যন্ত 

while (i <= 10) {
    console.log(i);
    i++;
}

// 3. 10 থেকে 1 পর্যন্ত
let j = 10; 
while (j >= 1) {
    console.log(j);
    j--;
}   

// 4. Even number print 1 থেকে 20 পর্যন্ত
let k = 1;  
while (k <= 20) {
    if (k % 2 === 0) {
        console.log(k);
    }       
    k++;
}

// 5. Odd number print 1 থেকে 20 পর্যন্ত
let l = 1;  
while (l <= 20) {
    if (l % 2 !== 0) {
        console.log(l);
    }
    l++;
}

// 6. Multiplication table of 5
let m = 1;  
while (m <= 10) {
    console.log(`5 x ${m} = ${5 * m}`);
    m++;
}

// for    → কতবার চলবে মোটামুটি জানা থাকলে
// while  → condition-এর ওপর depend করলে