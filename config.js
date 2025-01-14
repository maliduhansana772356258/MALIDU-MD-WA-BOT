const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~cytWnTIS#9n_W1Zkc2WQ-OqsDXEJSW4cReyFzHM_Mli8UV9yyQbI",
ALIVE_IMG: process.env.ALIVE_IMG || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DsJTn1Zq-Ot2HfC0AJyyxO813o6pXewVCw&s",
ALIVE_MSG: process.env.ALIVE_MSG || "HII...I AM ALIVE NOW...😚",
};
