const mongoose = require('mongoose');

// URL + database name (pick a new db name)
const connectionURL = process.env.MONGODB_URL;

mongoose.set('strictQuery', true);
mongoose.connect(connectionURL);

// const me = new User({
// 	name: '    Vítor    ',
// 	email: 'MYEMAIL@MAIL.IO   ',
// 	password: 'cenas123456      ',
// });

// me.save()
// 	.then(me => {
// 		console.log(me);
// 	})
// 	.catch(error => {
// 		console.log('Error', error);
// 	});

// const task = new Task({
// 	description: '   Another description   ',
// 	// completed: true,
// });

// task.save()
// 	.then(task => {
// 		console.log(task);
// 	})
// 	.catch(error => {
// 		console.log('Error', error);
// 	});
