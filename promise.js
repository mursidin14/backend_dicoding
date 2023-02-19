// 1. Consuming Promise

// const exsecutorFunction = (resolve, reject) => {
//     const makeCoffeeRedy = true;
//     if(makeCoffeeRedy){
//         resolve('kopi sudah jadi');
//     }else{
//         reject('maaf kopi habis');
//     }
// }

// const makeKopi = () => {
//    return new Promise(exsecutorFunction)
// }

// console.log(makeKopi());



// 2. onRejected with catch

// const stock = {
//     coffeBeans: 40,
//     water: 1000,
// }

// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if(stock.coffeBeans >= 16 && stock.water >= 250){
//             resolve(`Stock cukup. bisa membuat kopi`)
//         } else {
//             reject(`stock tidak cukup`)
//         }
//     })
// }

// const handleResolved = resolvedValue => {
//     console.log(resolvedValue)
// }

// const handleRejection = rejectionValue => {
//     console.log(rejectionValue)
// }

// checkStock()
// .then(handleResolved)
// .catch(handleRejection)

// 3. chining promises

const state = {
    // stock
    stock: {
        coffeBeans: 250,
        water: 1000,
    },

    isCoffeeMachineBusy: true
}

// check mesin kopi
const checkMesinCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(state.isCoffeeMachineBusy){
                resolve('mesin kopi siap di gunakan')
            } else {
                reject('mesin kopi sedang sibuk atau rusak')
            }
        }, 1500)
    })
}

// check stock kopi
const checkStock = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(state.stock.coffeBeans >= 16 && state.stock.water >= 250){
                resolve(`Stock cukup. bisa membuat kopi`)
            } else {
                 reject(`stock tidak cukup`)
            }
        }, 3000)
    })
}

// check kopi sudah jadi atau belum
const checkCoffee = () => {
    console.log('membuat Kopi anda...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('kopi anda sudah siap')
        }, 3500)
    })
}

// antrian pesanan
function makeCoffeeRedy(){
    // check mesin kopi
    checkMesinCoffee()
    .then((value) => {
        console.log(value)
        return checkStock()
    })
    .then((value) => {
        console.log(value);
        return checkCoffee()
    })
    .then((value) => {
        console.log(value)
        state.isCoffeeMachineBusy = true
    })
    .catch(error => {
        console.log(error)
    })
}

makeCoffeeRedy();