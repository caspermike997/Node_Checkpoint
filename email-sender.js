// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter using your SMTP settings
const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    auth: {
        user: 'mike@gmail.com',
        pass: 'Akp11',
    },
});

// Email details
const mailOptions = {
    from: 'mike@gmail.com',
    to: 'casper@gmailcom',
    subject: 'Test Email from Node.js',
    text: 'Hello, this is a test email from Node.js!',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});





// Instructions
// Install Node.js
// 1- In this task, you will:

// Create a file named hello-world.js
// Write a program to print "HELLO WORLD" to the console
// 2- In this task, you will:

// create a server  
// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000
// 3-  In this task, you will:

// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// Second, create a program that reads and console.log data from hello.txt
 

// 4- In this task, you will:

// Create a file named "password-generator"  
// (use npm install generate-password : (https://www.npmjs.com/package/generate-password)

// Create a function that generates random passwords and console.log() that password.
 

// 5-  In this task, you will:

// create a file named email-sender  
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

// Try to send your self email using this
 

 

// PS: Don't forget to delete your personal information before uploading it to GitHub :) 