# Placement Cell Portal

## Overview

The **Placement Cell Portal** is a web application designed to streamline the placement process for students and companies. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this portal provides an efficient platform for managing student profiles, company drives, and admin functionalities.

## Technology Stack

- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **Styling:** Tailwind CSS

## Database

The application uses a MongoDB database named `placement`, which contains the following collections:

- **admins**: Stores information about administrators.
- **companies**: Contains details about companies participating in placement drives.
- **users**: Holds student and coordinator profiles.

## Features

1. **Admin Dashboard**:
   - Manage student profiles, company details, and placement drives.
   
2. **Student Dashboard**:
   - Register and update profiles.
   - View active placement drives and coordinator information.
   
3. **Company Dashboard**:
   - Post and manage placement drives.
   - View student applications.

4. **Role-Based Access Control**:
   - Different roles (admin, student, company) have specific access to various functionalities.

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/httpsdevil/Placement.git

2. Navigate to the backend directory:
   
   cd Placement/backend
3. Install dependencies:

   npm install

4. Create a .env file in the backend directory with the following environment variables:

   MONGO_URI=your-mongodb-connection-string

5. Start the backend server:

   npm start or nodemon '.\server.js'


### Frontend Setup

1. Navigate to the frontend directory:

   cd Placement/frontend

2. Install dependencies:

   npm install


3. Start the frontend server:

   npm start




# Inshort, to run this project on your pc

1. Open command prompt in any of your directory
2. copy the 3rd point command and paste their
3. git clone https://github.com/httpsdevil/Placement.git
4. Then open the terminal for both folders (fronted and backend), you can open the terminal as integrated terminal or separately for both
5. Run this command on both terminal for dependencies-> npm install
6. All set, now run the server on both folder - 
   frontend - npm start
   backend - npm start or nodemon ".\server.js"

7. Check the .env file in backend folder for connection with mongodb, to adjust your connection
8. And make sure you having Database named "placement"


9. If you are still having problem in running this project, you can email me at mbendwal629@gmail.com   