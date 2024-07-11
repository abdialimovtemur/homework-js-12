// 1. ixtiyoriy array yarating va undagi bir martadan ko'p takrorlangan item larni boshqa array ko'chiradigan function yarating 



// let arr = [1, 2, 3, 3, 4, 1, 23, 4]
// let newArr = []

// function doubleNum() {
//     for (let i = 0; i < arr.length; i++) {
//         for (let g = 0; g < i; g++) {
//             if (arr[g] === arr[i]) {
//                 newArr.push(arr[g])
//             }
//         }
//     }

//     console.log(newArr)
// }

// doubleNum()



// 2. Array elementlari kvadratlaridan hosil bo’lgan array hosil qiling. Input: [1, 2, 3, 4, 5] Output: [1, 4, 9, 16, 25]





// let arr = [1, 2, 3, 4, 5, 9];
// let newArr = [];

// arr.forEach(element =>{
//     newArr.push(Math.pow(element, 2))
// }) 
// console.log(newArr);


// 3.Arraydagi musbat sonlar yig’indisini hisoblang. (filter va reduce). Input: [ 1, -4, 12, 0, -3, 29, -150] Output: 42


// let arr = [12, -22, 34, -23, 42, -2, -234, 43];

// const positeveSum = () => {
//     let total = arr.filter(arr => arr > 0).reduce((a,b) => a + b, 0);
//     console.log(total)
// }

// positeveSum()


// 4. Stringdagi so’zlarning bosh harflarini oling. (split, map, join). Input: 'George Raymond Richard Martin'. Output: 'GRRM' 


// let userStr = prompt("Gapni kiriting")

// function firstLetters() {
//     let onlyLettersArray = userStr.split('').filter(char => /[a-zA-Z]/.test(char));
//     console.log(onlyLettersArray)

// }

// firstLetters()


// 5. Berilgan stringni faqatgina harflardan iborat ekanligiga tekshiring

// let userStr = prompt("Gapni kiriting")
// function isNanFunction() {
//     let num = 0;
//     let str = 0;
//     for (let i = 0; i < userStr.length; i++) {

//         if (isNaN(userStr[i]) == true)
//         {
//             str++
//         }
//         else {
//             num++
//         }

//     }
//     if(num == 0){
//         console.log("So'z faqat stringdan iborat")
//     }else{
//         console.log("So'zda son bor")
//     }

// }

// isNanFunction()



// 6. String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan array qaytaring. (split, map) Input: "Hello world" Output: [3, 9, 12] 


let userStr = prompt("Gapni kiriting")
function strLength() {
    let arr = userStr.split(" ");
    console.log(arr)
// let newArr = [];

// arr.forEach(element =>{
//     newArr.push(Math.pow(element, 2))
// }) 
// console.log(newArr);

}

strLength()
