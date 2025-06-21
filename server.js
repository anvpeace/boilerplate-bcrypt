'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
let bcrypt        = require('bcrypt');

fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
        console.log(hash);
            bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
        /*res == true or false*/
                console.log(res);
            });
});


// async function hashPassword() {
//   try {
//     const hashedPassword = await   bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
//         console.log(hashedPassword);
//             bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
//         /*res == true or false*/
//                 console.log(res);
//             });
//         });

//     }

//END_ASYNC
// catch(err){
//     console.error(err);
//   }
// };

//START_SYNC
//  hashPassword();


//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
