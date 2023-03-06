var TeleSignSDK = require('telesignsdk');

const customerId = process.env.TELESIGN_CUSTOMER_ID;
const apiKey = process.env.TELESIGN_API_KEY;
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000; // 10 secs

const client = new TeleSignSDK( customerId,
apiKey,
rest_endpoint,
timeout // optional
// userAgent
);

const phoneNumber = "21658407600";
const message = "Merci pour votre achat <3";
const messageType = "ARN";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
if (error === null) {
console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
    ` => code: ${responseBody["status"]["code"]}` +
    `, description: ${responseBody["status"]["description"]}`);
} else {
console.error("Unable to send message. " + error);
}
}
client.sms.message(messageCallback, phoneNumber, message, messageType);