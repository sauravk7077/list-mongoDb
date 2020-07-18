const mongoose = require('mongoose');
const dotenv = require('dotenv');
const process = require('process');

dotenv.config();

mongoose.connect(process.env.DB_CONFIG);

mongoose.connection.once('open', ()=>{
    console.log("Connection has been made.");
})