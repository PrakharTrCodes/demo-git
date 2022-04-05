//Code:1 - Given two strings, return true if they are anagrams of one another.


const anagramCheck = (s1, s2) => {
    let l1 = s1.length;
    let l2 = s2.length;
    if (l1 !== l2) {
        console.log('Not Anagram');
        return
    }
    let str1 = s1.toLowerCase().split('').sort().join('');
    let str2 = s2.toLowerCase().split('').sort().join('');
    if (str1 === str2) {
        console.log("Is Anagram");
    } else {
        console.log("Not Anagram");
    }
}
anagramCheck("prAkhar", "rakahrp");           //O/p : Is Anagram


//Code : 2- Write a JavaScript program to calculate the factorial of a number

function factorial(num) {
    if (num < 0) {
        return ("Wrong Input")
    }

    else if (num === 0 || num === 1) {
        return num;
    }
    else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(4));                   // O/p : 24


//Code: 3- Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers

const gcdOfNums = (num1, num2) => {
    let d = Math.min(num1, num2);

    let temp = 1;
    while (temp) {
        if (((num1 % d) == 0) && ((num2 % d) == 0)) {
            return d;
            temp = 0;
        }
        else {
            d -= 1;
        }
    }

}

console.log(gcdOfNums(18, 27))                      //O/P: 9



//Code : 4- Write a JavaScript program to convert an asynchronous function to return a promise.

const promiseFunc = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (false) resolve('Promise Resolved');
            else reject('Promise Rejected')
        }, 1000);


    }

    )
}
async function myAsynchronous() {
    try {
        let myResp = await promiseFunc();
        console.log("My response: ", myResp)
    } catch (err) {
        console.log("Error", err)
    }
}

myAsynchronous()                         // O/P : My response  Promise Resolved

//Code : 5 - Write a JavaScript program which returns a subset of a string. 
//Sample Data: dog
//Expected Output: ["d", "do", "dog", "o", "og", "g"]


function subsetOfStr(str) {
    var i, j, res = [];

    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            res.push(str.slice(i, j));
        }
    }
    return res;
}


console.log(subsetOfStr('dog'));                        //O/P: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]


//Code : 6 Write a JavaScript function to check whether a string is blank or not.

const isCheck = (str) => {
    if (str.length === 0) {
        return true
    }
    else {
        return false
    }
}

console.log("Is the string empty :", isCheck(''))         // O/P: Is the string empty : true




//Code : 7 Write a JavaScript function to capitalize the first letter of a string.

const capitalize = (str) => {
    return (str[0].toUpperCase()) + str.slice(1, str.length)
}
console.log(capitalize('hello'))            // O/P : Hello

//Code : 8 Write a JavaScript function to capitalize the first letter of each word in a string.
//Aproach 1:
// const capitalizeEachWord = (str) => {
//     let res = ''
//     res += str[0].toUpperCase()
//     for (let i = 1; i < str.length; i++) {
//         if (str[i] == ' ') {
//             res += str[i];
//             res += str[i + 1].toUpperCase();
//             i += 1;
//         }
//         else {
//             res += str[i]
//         }
//     }
//     return res;
// }
//console.log("Output:", capitalizeEachWord('my name is prakhar'))   // O/P : Output: My Name Is Prakhar


//Approach 2:
const capitalizeEachWord = (s)=>{
    let resArr = s.split(' ').map((ele)=>{
        return ele[0].toUpperCase() + ele.slice(1, ele.length)
    })
    return resArr.join(' ')


}
console.log("Output:", capitalizeEachWord('my name is prakhar'))        // O/P : Output: My Name Is Prakhar





//Code : 9 Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.


const reverseCase = (s) => {
    
    let arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i].toLowerCase())

            arr[i] = arr[i].toUpperCase();

        else if (arr[i] == arr[i].toUpperCase())
            arr[i] = arr[i].toLowerCase();
    }

    return arr.join("");
}



console.log(reverseCase('hi How ArE YoU'));      // O/P :HI hOW aRe yOu



//Code : 10 Write a JavaScript function to convert a string into camel case.


function toCamelCase(str){
    let resArr = str.split(' ').map((ele,i)=>{

      if(i == 0){
        return ele.toLowerCase();
      }

      return ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
    });
    return resArr.join('')
  }

console.log(toCamelCase('hello how are you'))    //O/P: helloHowAreYou
















