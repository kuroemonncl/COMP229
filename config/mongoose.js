const mongoose = require('mongoose');

module.exports = function() {
    const connectionString = 'mongodb+srv://kuroemonncl:jayandkai6*@comp229.ubfzw9m.mongodb.net/';
    const db = mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
    return db;
};
