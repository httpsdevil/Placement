const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const companySchema = new mongoose.Schema({
    full_name :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    designation :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    contact_number :{
        type : String,
        required : true
    },
    website :{
        type : String,
        required : true
    },
    city :{
        type : String,
        required : true
    },
    about_role :{
        type : String,
        required : true
    },
    role: {
        type: String,
        enum: ['company'],
        default: 'company'
    }
})


// Hash the password before saving -

companySchema.pre('save', async function(next) {      // This is a Mongoose middleware function that runs before a document (in this case, a user) is saved to the database. The pre('save') hook is used to perform actions before saving the document.
    if (!this.isModified('password')) return next(); // Only hash the password if it has been modified (or is new)
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

// Compare the given password with the hashed password in the database -

// userSchema.methods.comparePassword defines an instance method on the userSchema. This method can be called on any user instance to compare a candidate password with the stored hashed password.
companySchema.methods.comparePassword = function(companyPassword) {  
    return bcrypt.compare(companyPassword, this.password);
};



const Company = mongoose.model("Company", companySchema);

module.exports = Company;