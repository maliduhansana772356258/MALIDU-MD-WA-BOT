const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'BCcASDpB#6yxZVT4sP0oOxQQTVzPpuEEQUKMRZovT7Cf1mjFT7oc',
    MONGODB: process.env.MONGODB || 'mongodb+srv://udavin56:1234@cluster0.urhma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    AUTO_VOICE:"𝗳𝗮𝗹𝘀𝗲"
};
