
const fs = require('fs')

// Creating required folders for express application
const folders = ['./controllers', './routes', './services', './models', './middleware']
folders.forEach(folder=>{
    if(!fs.existsSync(folder)) fs.mkdirSync(folder) // If the folder is not exist, it will create a new one
})

// Create a app.js file to handle requests
fs.readFile('./app.txt', (err, data)=>{
    fs.writeFile('./app.js', data, ()=>console.log("Created app.js file"));
})


// Create a test.controllers.js file
fs.readFile('./controllers.txt', (err, data)=>{
    fs.writeFile('./controllers/test.controller.js', data, ()=>console.log("Created dummy controller file"));
})


// Create a test.routes.js file
fs.readFile('./routes.txt', (err, data)=>{
    fs.writeFile('./routes/test.routes.js', data, ()=>console.log("Created dummy routes file"));
})


