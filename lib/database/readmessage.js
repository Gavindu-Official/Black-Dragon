const mongoose = require('mongoose');
const ReadMessageSchema = new mongoose.Schema({
id: { type: String, required: true, unique: true },
worktype: { type: String, default: "false"}
})
const readmessagethama =  mongoose.model("readmessagethama", ReadMessageSchema)
module.exports = { readmessagethama }
