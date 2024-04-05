const fs = require('fs').promises; // Importing fs module with promises

// Creating required folders for express application
const folders = ['./controllers', './routes', './services', './models', './middleware'];

async function createFolders() {
    for (const folder of folders) {
        try {
            await fs.mkdir(folder);
            console.log(`Created folder: ${folder}`);
        } catch (err) {
            if (err.code !== 'EEXIST') {
                console.error(`Error creating folder ${folder}: ${err.message}`);
            }
        }
    }
}

// Create a app.js file to handle requests
async function createAppFile() {
    try {
        const data = await fs.readFile('./app.txt', 'utf8');
        await fs.writeFile('./app.js', data);
        console.log("Created app.js file");
    } catch (err) {
        console.error(`Error creating app.js file: ${err.message}`);
    }
}

// Create a test.controllers.js file
async function createControllerFile() {
    try {
        const data = await fs.readFile('./controllers.txt', 'utf8');
        await fs.writeFile('./controllers/test.controller.js', data);
        console.log("Created dummy controller file");
    } catch (err) {
        console.error(`Error creating controller file: ${err.message}`);
    }
}

// Create a test.routes.js file
async function createRoutesFile() {
    try {
        const data = await fs.readFile('./routes.txt', 'utf8');
        await fs.writeFile('./routes/test.routes.js', data);
        console.log("Created dummy routes file");
    } catch (err) {
        console.error(`Error creating routes file: ${err.message}`);
    }
}

// Call the functions in sequence
async function main() {
    await createFolders();
    await createAppFile();
    await createControllerFile();
    await createRoutesFile();
}

main();
