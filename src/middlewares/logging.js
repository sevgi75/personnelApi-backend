"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// app.use(logging):

//* MORGAN LOGGING
// https://expressjs.com/en/resources/middleware/morgan.html
// https://github.com/expressjs/morgan
//? $ npm i morgan

const morgan = require('morgan')
//? write to file day by day:
const fs = require('node:fs')

const now = new Date()
// console.log(typeof now, now); // 2024-03-26T09:51:05.043Z bize tarih bu formatta geliyor.Ve type object
const today = now.toISOString().split('T')[0]
// console.log(typeof today, today);
// app.use(morgan('combined', {
//     stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+'})
// }))

module.exports = morgan('combined', {
    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+'})
})