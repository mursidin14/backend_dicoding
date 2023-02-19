function orderCoffe(callback) {
    let coffee = null
    console.log('kopi sedang dibuat, silahkan tunggu...');
    setTimeout(() => {
        coffee = 'kopi sudah dibuat';
        callback(coffee)
    }, 1000)
}

orderCoffe(coffee => {
    console.log(coffee)
})