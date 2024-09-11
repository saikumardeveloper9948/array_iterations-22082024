// 1. Double the numbers in an array: [1, 2, 3, 4, 5] → [2, 4, 6, 8, 10]
let a =[1,2,3,4,5]
let newrray=a.map(function(value,index,array){
return `${value*2}`

})
console.log(newrray)

// // 2. Convert strings to uppercase: ["hello", "world"] → ["HELLO", "WORLD"]

let b=["hello","world"]
let newarr1=b.map(function(d){
    return d.toUpperCase()
})
console.log(newarr1)


// // Filter

// // 1. Get even numbers from an array: [1, 2, 3, 4, 5] → [2, 4]

let c =[1,2,3,4,5]
let newarr2=a.filter(function(x,y,z){
    return x % 2==0;
})
console.log(newarr2)


// // 2. Get strings longer than 5 characters: ["hello", "world", "abc"] → ["hello", "world"]

const words = ["hello","world","abc"];
const result = words.filter(function(word){
    return word.length >3
})
console.log(result);

// // ForEach
// // 1. Log each number in an array: [1, 2, 3, 4, 5] → console logs each number

let d=[1,2,3,4,5]
d.forEach(function(k,l,m){
    console.log(k)
})



// // 2. Append "!" to each string in an array: ["hello", "world"] → ["hello!", "world!"]

let e=["hello","world"]
e.forEach(function(f){
   console.log([`${f}!`])
})

// // Every
// // 1. Check if all numbers in an array are positive: [1, 2, 3, 4, 5] → true

let f=[1,2,3,4,5]
let g=f.every(function(x){
    return x >0
})
console.log(g)

// // 2. Check if all strings in an array are longer than 5 characters: ["hello", "world", "abc"] → false


let h=["hello","world","abc"]
let i=h.every(function(x){
    return x >5
})
console.log(i)

// // Some
// // 1. Check if any number in an array is even: [1, 2, 3, 4, 5] → true

let j=[1,2,3,4,5]
let k=j.some(function(y){
    return y%2==0
})
console.log(k)

// // 2. Check if any string in an array contains "x": ["hello", "world", "max"] → true

let l=["hello","world","max"]
let m=l.some(function(value){
    return value.includes("x")
})
console.log(m)

// // Find
// // 1. Find the first even number in an array: [1, 2, 3, 4, 5] → 2

let n =[1,2,3,4,5]
let o=n.find(function(value){
    return value >1
})
console.log(o)




// // 2. Find the first string in an array that contains "x": ["hello", "world", "max"] → "max"

let p =["hello","world","max"]
let q=p.find(function(c){
    return c.includes("x")
})
console.log(`${q}`)



// // FindIndex
// // 1. Find the index of the first even number in an array: [1, 2, 3, 4, 5] → 1

let r=[1,2,3,4,5]
let y=r.findIndex(function(w,x){
    return x
})
console.log(y)


// // 2. Find the index of the first string in an array that contains "x": ["hello", "world", "max"] → 2


let t=["hello","world","max"]
let u=t.findIndex(function(a,b,c){
    return a.includes("x")
})
console.log(`${u}`)