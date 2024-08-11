const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    first_name :{
        type : String,
        required : true,
    },
    last_name :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    bachelor_college : {
        type : String,
        required : true,
    },
    graduation_college : {
        type : String,
        required : true,
    },
    stream : {
        type : String,
        required : true,
    },
    cgpa : {
        type : String,
        required : true,
    }
}) 



// Hash the password before saving -

userSchema.pre('save', async function(next) {      // This is a Mongoose middleware function that runs before a document (in this case, a user) is saved to the database. The pre('save') hook is used to perform actions before saving the document.
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
userSchema.methods.comparePassword = function(candidatePassword) {  
    return bcrypt.compare(candidatePassword, this.password);
};



const User = mongoose.model('User', userSchema);

module.exports = User;