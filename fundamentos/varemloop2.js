var array = []
for (var i = 0; i < 33; i++) {
    array.push(function () {
        console.log(i)
    })
}
array[2]()
array[8]()
// isso vai dar erro vai dar apenas o ultimo elemento porque var é bosta
//se fosse com let daria certo

//tentativa dois do teste fizzbuzz

for (let u = 1; u <= 100; u++) {
    let t = "";
    if (u % 3 == 0) t += "Fizz";
     if (u % 5 == 0) t += "Buzz";
    console.log(t || u)
}

for (let v = 1;v <= 100; v +=1 ){
    let q = "";
    if (v%3 == 0) q += "Fizz";
    if (v%5 ==0 ) q += "Buzz";
    console.log(q||v);
}

//isso funciona 

for (let x = 1; x <= 100; x += 1) {
    let y = x % 3 == 0,
        z = x % 5 == 0;
    console.log(y ? z ? "FizzBuzz" : "Fizz" : z ? "Buzz" : x);
}