let strr = 'adeyemi'
let rep = strr.replace(/[a,e,i]/g, '')
console.log(rep)

let str = "[Dialog4]Hello, this is Mike[Dialog5]" 

let replaced = str.replace(/\[[^\]]*\]/g,"")
// let sl = replaced.replace(/([aeiou])/g,"$1$1$1")
let sl = replaced.replace(/([aeiou])/g,"$1$1$1")

let sli = '123 ,1234, 90, 12345 ,0981 '
let slowi = sli.trim().split(',').join('')
let slow = sli.trim().replace(/,/g,'')

console.log(slowi)
console.log(slow)

// let given = '123 1234 90 1 2345 9 0981 21'.split(' ')
let given = '123 1234 90 1 2345 9 0981 21'
let retun = given.replace(/\w{2}/g,'n')
console.log(retun);