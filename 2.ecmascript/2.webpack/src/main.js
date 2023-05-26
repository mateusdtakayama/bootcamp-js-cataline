import * as calculator from './calculator'

console.log(calculator.sub(3,2))
console.log(calculator.sum(3,3))

const myPromise  = () => new Promise((resolve, reject) => {
    return setTimeout(() => {
        resolve('ok')
    }, 2000);
})
const mySecond  = () => new Promise((resolve, reject) => {
    return setTimeout(() => {
        reject('deu ruim')
    }, 2000);
})

// myPromise.then(()=> {
//     console.log('primeira vez')
//     myPromise.then(()=> {
//         console.log('segunda vez')
//         myPromise.then(()=> {
//             console.log('terceira vez')
//             myPromise.then(()=> {
//                 console.log('quarta vez')
//                 myPromise.then(()=> {
//                     console.log('quinta vez')
//                 })
//             })
//         })
//     })
// })

const exec = async () => {
    await myPromise()
    console.log('primeira vez')

    await myPromise()
    console.log('segunda vez')

    await myPromise()
    console.log('terceira vez')

    await myPromise()
    console.log('quarta vez')
}

exec()

const erro = async () => {
    try{
        await mySecond()
        console.log('deu bom')
    } catch(error){
        console.log(error)
    }
}

erro()