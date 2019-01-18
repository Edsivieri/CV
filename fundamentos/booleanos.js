/*

*/
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
isAtivo
console.log(!!isAtivo)
console.log('verdadeiros..')
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!' ')
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log("falsos")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)


console.log(false || true) // || é ou, se um for verdadeiro ele dara true, se ambos falso sera falso
console.log(true && true) //&& é E, ambos precisam ser verdadeiros

console.log(1 + 1 == 2 && 10 * 10 === 50) /* But what if you want to test whether something refers
to the precise value false? Expressions like 0 == false and "" == false are also true
because of automatic type conversion. When you do not want any type conversions to happen,
there are two additional operators: === and !==. The first tests whether a value is precisely equal
to the other, and the second tests whether it is not precisely equal.
 So "" === false is false as expected.
 Another important property of these two operators is that the part to their right is evaluated
only when necessary.
In thecase oftrue || X, no matter what X is— even if it’ s a piece of program that does something 
terrible—the result will be true, and X is never evaluated.The same goes for false && X,
 which is false and will ignore X.This is called short - circuit evaluation.*/