const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'vytman@gmail.com',
		subject: 'Thanks from joining in!',
		text: `Welcome to the app, ${name}. Let me now how you get along with the app.`,
	});
};

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'vytman@gmail.com',
		subject: 'Sorry to let you go.',
		text: `Goodbye, ${name}, I hope to see you back sometime soon`,
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail,
};
