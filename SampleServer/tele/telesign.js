
const TelesignSDK = require('telesignenterprisesdk');

const customerId = process.env.CUSTOMER_ID || "007AB614-EF48-4C62-9DD8-DBAD491152CE";
const apiKey = process.env.API_KEY || 'NA20uKvn26S5KxbUt72Si0+y1AIVPanVEWffYW0PJ3as1yYE9KvzH1QTF0d35zdPQhdGnfpi6C7SEqzp74yPmQ==';
const phoneNumber = process.env.PHONE_NUMBER || "919901405981";
const verifyCode = Math.floor(Math.random() * 99999).toString();
const params = {
    verify_code: verifyCode
    , sender_id: "undefined"
};

const client = new TelesignSDK(customerId, apiKey);

function smsVerifyCallback(error, responseBody) {
    if (error === null) {
        console.log("\nResponse body:\n" + JSON.stringify(responseBody));
    } else {
        console.error("Unable to send message. " + error);
    }
    prompt('\nEnter the verification code you received:\n', verify);
}

function prompt(question, callback) {
    const stdin = process.stdin, stdout = process.stdout;
    stdin.resume();
    stdout.write(question);
    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

function verify(input) {
    if (input === params['verify_code']) {
        console.log('\nYour code is correct.');
    } else {
        console.log('\nYour code is incorrect.');
    }
    process.exit();
}

client.verify.sms(smsVerifyCallback, phoneNumber, params);
