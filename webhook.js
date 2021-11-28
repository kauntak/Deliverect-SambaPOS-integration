module.exports = {start};

const ngrok = require('ngrok');
const dotenv = require('dotenv');
const log = require('./log');
dotenv.config();

const ngrok_options = {
	addr: process.env.NGROK_PORT,
	//auth: process.env.NGROK_AUTH,
	subdomain: process.env.NGROK_SUBDOMAIN,
	authtoken: process.env.AUTH_TOKEN
};
//start();

//writing to log for ngrok webhook server
function writeToLog(content){
    log.write("Webhook", content);
}

//starting ngrok server.
async function start(){
    const url = await ngrok.connect(ngrok_options);
	const api = ngrok.getApi();
	const hookrequests = api.listRequests();
	writeToLog("Webhook Server Started.\r\n\r\n\r\n");
	return;
}