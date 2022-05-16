// exercise1
// let a = 5; b = 6; sum = 0;
// for(index = b; index > 0; index --)
// {
//     sum = sum + a
// }
// console.log(sum)

// exercise2
// let num = 1234; cum = 1;
// while (num > 0)
// {
//     cum = cum * (num % 10)
//     cum = Math.trunc(num / 10)
// }
// console.log(cum)

//exercise3
// let mane = "nnnnnnn"
// let length = mane.length;
// let isGreat = false;
// for (index = 0; index <= length; index++) {
//     if (mane.charAt(index) === "m" || mane.charAt(index) === "i" || mane.charAt(index) === "d" || mane.charAt(index) === "b" || mane.charAt(index) === "a" || mane.charAt(index) === "r") {
//         isGreat = true;
//     }
// }

// if (isGreat) {
//     console.log("great");
// }
// else {
//     console.log("bad");
// }

//exercise4
// let num = "18967"
// let length = num.length
// let isGreat = false
// for(index = 0; index <=num.length; index++)
// {
//     if (num.charAt(index) === "6")
//     isGreat = true
// }
// if (isGreat) {
//     console.log("great")
// }
// else
// {
//  console.log("bad")   
// }

//exercise5
for (index = 1000; index <= 6000; index++)
{
    if (index % 10 === 6 || Math.trunc((index / 10) % 10) === 6 || Math.trunc((index / 100) % 10 === 6))
    {
        console.log(index)
    }
}
