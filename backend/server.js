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
const findCompanyByEmail = require('./controllers/companyControllers'); 

app.use(cors());
app.use(express.json()); // For parsing JSON bodies
app.use(bodyParser.json());


connectDB();


app.get('/', (req, res) => {
    res.send("Home")
});


// REGISTER KARNE KE LIYE
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

















// LOGIN KE LIYE
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




















// Admin Dashboard ke liye - 

// Endpoint to get the number of coordinators (admins)
app.get('/api/dashboard/coordinators', async (req, res) => {
    try {
        const count = await Admin.countDocuments();
        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch coordinators count' });
    }
});

// Endpoint to get the number of students
app.get('/api/dashboard/students', async (req, res) => {
    try {
        const count = await User.countDocuments();
        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch students count' });
    }
});

// Endpoint to get the number of companies
app.get('/api/dashboard/companies', async (req, res) => {
    try {
        const count = await Company.countDocuments();
        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch companies count' });
    }
});




// Admin Active Drives ke liye - 
app.get('/api/active-drives', async (req, res) => {
    try {
        // Fetch all fields except the password
        const companies = await Company.find({}, 'full_name createdAt role designation email contact_number website city about_role -_id');
        res.json(companies);
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ error: 'Failed to fetch companies' });
    }
});




// Admin ke Students profile ke liye - 
app.get('/api/students', async (req, res) => {
    try {
        const students = await User.find(); // Fetch all students
        res.json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Failed to fetch students', error });
    }
});



// Admin ke Coordinators ke liye
app.get('/api/coordinators', async (req, res) => {
    try {
        const admins = await Admin.find({}, '-password'); // Exclude password field
        res.json(admins);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch coordinators' });
    }
});















// Student dashboard ke liye 

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, 'devil_demon_cursed', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Get student profile
app.get('/api/student/application', authenticateToken, async (req, res) => {
    try {
        const student = await User.findById(req.user.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        console.error('Error fetching student profile:', error);
        res.status(500).json({ message: 'Failed to fetch profile' });
    }
});

// Update student profile
app.put('/api/student/profile', authenticateToken, async (req, res) => {
    const { first_name, last_name, bachelor_college, graduation_college, stream, cgpa } = req.body;
    try {
        const updatedStudent = await User.findByIdAndUpdate(
            req.user.id,
            { first_name, last_name, bachelor_college, graduation_college, stream, cgpa },
            { new: true, runValidators: true } // Ensures validation rules are applied
        );
        if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
        res.json(updatedStudent);
    } catch (error) {
        console.error('Error updating student profile:', error);
        res.status(500).json({ message: 'Failed to update profile' });
    }
});




// Update student profile endpoint
app.get('/api/student/application', authenticateToken, async (req, res) => {
    try {
        const student = await User.findById(req.user.id).select('-password'); // Exclude password
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        console.error('Error fetching student profile:', error);
        res.status(500).json({ message: 'Failed to fetch profile' });
    }
});




// // Company's data (for active drive)
app.get('/api/companies', async (req, res) => {
    try {
      const companies = await Company.find({}, '-password'); // Exclude password from the result
      res.status(200).json(companies);
    } catch (error) {
      console.error('Error fetching companies:', error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });





app.listen(4000, () => {
    console.log("Server is live at port 4000");
});