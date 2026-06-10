const  app = require('./src/app');
const  connectDB = require('./src/db/db');

try {
    connectDB();
} catch (error) {
    console.error('Error connecting to DB:', error);
    porocess.exit(1); // Exit the process with an error code
}


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});