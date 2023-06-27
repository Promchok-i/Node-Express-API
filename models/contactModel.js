const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    // _id: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email address"],
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone number"],
    },
}, {
    timestamps: true,
})

// module.exports = mongoose.model("Contact", contactSchema);
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;