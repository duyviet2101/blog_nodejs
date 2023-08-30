const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev');
        console.log('connect db success');
    } catch (error) {
        console.log('connect db error');
    }
}

module.exports = { connect };
