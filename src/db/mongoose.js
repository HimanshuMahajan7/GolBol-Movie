const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL;

let isConnected = false;

module.exports = () => {
    if(isConnected) {
        return Promise.resolve();
    } else {
        mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("connection to mongodb established");
        }).catch((err) => {
            console.log("error connecting to mongodb", err);
        });
        isConnected = true;
    }
}
