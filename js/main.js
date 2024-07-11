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

// function strLength() {
//     let arr = userStr.split(" ");
//     let newArr = [];

//     arr.forEach(element => {
//         console.log(userStr.indexOf(0))
//         // newArr.push(element.length)
//     })
//     console.log(newArr);

// }
// strLength()





// 5. Berilgan stringni faqatgina harflardan iborat ekanligiga tekshiring

// let userStr = prompt("So'zni kiriting kiriting")

// function strLength() {
//     let arr = userStr.split(" ");
//     let newArr = [];
//     let num = 0;
//     let str = 0;
//     arr.forEach(element =>{
//         for (let i = 0; i < element.length; i++) {
//             if(!isNaN(element[i])){
//                 num++
//             }else{
//                 str++
//             }

//         }
//     })

//     if (num < 1) {
//         console.log("Gap faqat stringdan iborat")
//     }else{
//         console.log("Gapda raqam mavjud")
//     }

// }
// strLength()



// 6. String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan array qaytaring. (split, map) Input: "Hello world" Output: [3, 9, 12]


// let userStr = prompt("Gapni kiriting")
// function strLength() {
//     let arr = userStr.split(" ");
//     let newArr = [];

//     arr.forEach(element =>{
//         newArr.push(element.length)
//     })
//     console.log(newArr);

// }
// strLength()




// 7. Stringni bo'sh joy bor yoki yo'qligini tekshiring. Input: "salom dunyo" Output: true 


// let userStr = ["Samsung", "Apple", "Tesla", '' , "Artel"];

// function IncludeStr() {
//     console.log(userStr.includes(""))
// }

// IncludeStr()



// 8. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring Input: {a: 2, b: 5, c: 7}. Output: ['a2', 'b5', 'c7']



function objKeyValueToArr(params) {
    let newArr = []

    const object1 = {
        a: 'Temurbek',
        b: 'Abdialimov',
        c: 20,
        d: 'Kashkadarya'
    };

    for (const [key, value] of Object.entries(object1)) {
        newArr.push(key+value)

    }
    console.log(newArr)
}

objKeyValueToArr()