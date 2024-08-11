const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const cors = require("cors");
const connectDB = require('./DB/config');
const mongoose = require("mongoose")
const User = require('./models/userModel')
const Company = require('./models/companyModel')
const Admin = require('./models/adminModel')

app.use(cors());
app.use(express.json()); // For parsing JSON bodies
app.use(bodyParser.json());


connectDB();



app.get('/', (req, res) => {
    res.send("Home")
});

app.post('/register-student', async (req, res) => {
    // Access form data from the request body
    const { firstname, lastname, email, password, confirmPassword, bachelorCollege, graduationCollege, stream, cgpa } = req.body;

    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Bachelor College:', bachelorCollege);
    console.log('Graduation College:', graduationCollege);
    console.log('Stream:', stream);
    console.log('CGPA:', cgpa);

    // Respond to the client
    
    const dt = await User.create({
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
        bachelor_college: bachelorCollege,
        graduation_college: graduationCollege,
        stream: stream,
        cgpa: cgpa,
    });

    if(dt){
        res.json({ message: 'Data received successfully!' });
    }
    else{
        res.json({message : 'Data is missing or invalid field'})
    }
    
});


app.post('/register-company', async (req, res)=>{
    const {fullname, password,confirmPassword, designation, email, contactNumber, website, city, aboutRole} = req.body;
    console.log("Full Name :", fullname);
    console.log("Password :", password);
    console.log("Confirm Password :", confirmPassword);
    console.log("Designation :", designation);
    console.log("Email :", email);
    console.log("Contact Number :", contactNumber);
    console.log("Website :", website);
    console.log("City :", city);
    console.log("About Role :", aboutRole);

    const dt = await Company.create({
        full_name : fullname,
        password : password,
        designation : designation,
        email : email,
        contact_number : contactNumber,
        website : website,
        city : city,
        about_role : aboutRole,
    })

    if(dt){
        res.json({ message: 'Data received successfully!' });
    }
    else{
        res.json({message : 'Data is missing or invalid field'})
    }
})


// unlock this when u have to register for a new admin

// app.post('/register-admin', async (req, res)=>{
//     const {fullname, password,confirmPassword, designation, email, contactNumber, website, city, aboutRole} = req.body;
//     console.log("Email :", email);
//     console.log("Password :", password);
//     console.log("Confirm Password :", confirmPassword);

//     const dt = await Admin.create({
//         email : email,
//         password : password,
//     })

//     if(dt){
//         res.json({ message: 'Data received successfully!' });
//     }
//     else{
//         res.json({message : 'Data is missing or invalid field'})
//     }
// })


app.post('/student-login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign(
            { id: user._id, email: user.email, role: 'student' },
            'devil_demon_cursed',
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


app.post('/company-login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const company = await Company.findOne({ email });
        if (!company) return res.status(401).json({ message: 'Invalid credentials' });

        const isMatch = await company.comparePassword(password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign(
            { id: company._id, email: company.email, role: 'company' },
            'devil_demon_cursed',
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


app.post('/admin-login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

        const isMatch = await admin.comparePassword(password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign(
            { id: admin._id, email: admin.email, role: 'admin' },
            'devil_demon_cursed',
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});





app.listen(4000, () => {
    console.log("Server is live at port 4000");
});