const mailgun = require("mailgun-js");
const DOMAIN = "sandboxbcf5f39546ea4aabbdeb613793a2f07f.mailgun.org";
const message = mailgun({apiKey: "c38c4af313a0080e0af4646556a030e4-e5e67e3e-5aa2a94b", domain: DOMAIN});
const data = {
	from: "Mailgun Sandbox <postmaster@sandboxbcf5f39546ea4aabbdeb613793a2f07f.mailgun.org>",
	to: "subalakshmi.v@calibraint.com",
	subject: "Hello",
	text: "Testing"
};
message.messages().send(data, function (body) {
	console.log(body);
});
