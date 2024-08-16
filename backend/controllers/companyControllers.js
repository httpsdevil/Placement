// const Company = require('../models/companyModel')

// function findCompanyByEmail(req, res) {
//     Company.findOne({ where: { email: req.params.email } })
//         .then(data => {
//             if (data) {
//                 res.send(data);
//             } else {
//                 res.status(404).send('Company not found');
//             }
//         })
//         .catch(err => {
//             res.status(500).send(err.message);
//         });
// }

// module.exports = findCompanyByEmail;
