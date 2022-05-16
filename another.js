// exercise1
// let a = 5; b = 6; sum = 0;
// for(index = b; index > 0; index --)
// {
//     sum = sum + a
// }
// console.log(sum)

// exercise2
let num = 1234; cum = 1;
while (num > 0)
{
    cum = cum * (num % 10)
    cum = Math.trunc(num / 10)
}
console.log(cum)