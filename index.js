const { app } = require('./app')

try {
    app.listen(3000)

    app.on('error', (err)=>{
        console.log(`Error occured: ${err}`)
    })
} catch (error) {
    console.log(`Error occured: ${error}`)
}