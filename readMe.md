# Fashion Store

## Usage

### Install

Navigate into the root folder ('backend') of the project and type 'npm install'. Then proceed to the front end by typing 'cd frontend' in the command line and type 'npm install' to install all necessary dependencies.

### Start

Once all dependcies have been installed, type 'npm run dev' to run both the backend and frontend concurrently. This should automatically redirect you to 'http://localhost:3000'.
To run the back end or front end separately, navigate into their respective root folders and type 'npm start'. The backend runs on 'http://localhost:8000'.

### Admin rights

To get admin rights, enabling you to add, delete or edit product items. Type 'http://localhost:3000/admin' this will direct the admin member to the login page where one has 3 different login options.

### Test

To test backend, run 'npm run test' to test the server using mocha.
For the front end, 'npm test' will use jest to test the application.

### Security

Helmet provides some security for the express app by setting various HTTP headers.
API keys were protected by adding them to separate config/keys.js files and adding this to .gitignore file ensuring they couldnt be accessed by uwnated users.

### Modifying database

To use this app on your local machine, create a keys.js file and copy the following to it. Fill in all necessary details.
"
module.exports = {
  google: {
    callbackURL: "/googlelogin/redirect",
    clientID:
      "",
    clientSecret: ""
  },
  facebook: {
    callbackURI: "/facebooklogin/redirect",
    clientID: "",
    clientSecret: ""
  },
  mongoDB: {
    dbURI:
      "mongodb+srv://<username>:<password>@hyperiondev-hy6ie.mongodb.net/fashionShow?retryWrites=true&w=majority"
  },
  session: {
    cookieKey: "logincookiefortodolist"
  }
};
"

### Deployment

This app was deployed on Heroku as a full stack app cotaining both the backend and front end since it has one developer working on both ends.
The link to the app is as follows: 

# Software requirements document

1. **Introduction**

---

1.1 Purpose
The purpose of this document is to build an online boutique store where the client will be able to showcase their products for customers to view.

1.2 Intended audience and intended use
Only developers will have access to this document.

1.3 Product scope
The purpose of this app is to serve customers with a simple user experience when browsing the online store. The system uses a noSQL database to store all the data and provide a secure server in order to provide users with a reliable experience.

2. **Overall Description**

---

2.1 Product perspective
The data systems will store the following information:

- the login details for the admin
- clients products

  2.2 User needs
  This app will be focused on providing a sleek yet simple design for users to surf the website.
  It will also provide the client with admin rights allowing them to make any neccessary modifications.

Customer fuctions:

- Users should be able to view the product items
- Users should be able to organise products by filtering to their specific needs
- Admin should be able to login through 3 different passport strategies

Administrative functions:

- Save admin details
- Give admin access
- Store and update products
- Filter products

2.3 Operating environment

- client/server system
- Operating system: Windows
- database: MongoDB database
- Node/Express server environment
- client-side: HTML, CSS, Javascript implemented using React framework

  2.4 Design and implementation constraints

- Admin and Products Schema
- Mongoose used to interact with database
- databased used to store all data and accessible through client side

  2.5 Assumption dependencies

- Data will be stored securely

3. **System Architecture**

---

The Single-Page Application (SPA's) software architecture pattern was used for this web application as it provides a dynamic interaction
and constant updating of web pages. SPA's also prevent interruptions in user experience.
This software architecture model was chosen for its fast response times, ease of scalability, support of testing,
reliable, reduces failure rate and allows for ease of maintenance.

4. **System Features**

---

4.1 Functional requirements

- App should store data on a secure database
- App should allow admin to log in and obtain admin access
- App should allow admin to add, edit or delete an item
- App should enable user to filter products by: date, price, etc.

  4.2 Client/Server system

- Client side is the application and is referred to as the front end while the server side is the database which is known as the backend.
- All data is stored on the backend
- Clients only interact with the frontend

5. **External interface requirements**

---

5.1 User interfaces

- **Front-end software:** HTML, CSS, Javascript implemented using React framework
- **Back-end software:** Node, Express and MongoDB

  5.2 Hardware interfaces

- Windows
- Any browser whih supports CGI, HTML and Javascript

  5.3 Software interfaces
  | Software used | Description |
  | ---------------- | --------------------------------------------------------------------------|
  | Operating system | Windows was used due to its excellent support and user friendliness |
  | Database | MongoDB was used to store all data for the application |
  | React | React was used to for the frontend because it's fast, scalable and simple |

  5.4 Communication interfaces
  This project should be accessible on all browsers.

6. **Non-functional requirements**

---

- **Usability:** Easy to use with a simple user face and able to satisfy customer needs.
- **Reliability:** Developers working around the clock to ensure app is always running smoothly and that all bugs are attended to immediately in order to provide a clean, reliable experience.
- **Performance:** Light webpage ensuring a quick response time.
- **Security:** MongoDB ensures the protection of all data in its database.
- **Design constraints:** Web app should be created in such a way that it eases modification instead of giving rise to unwanted anomalies.
- **Implementation requirements:** Languages used HTML, CSS and Javascript implemented using React frontend framework while the server-side data will be rendered using Node, Express and MongoDB.
- **Interface requirements:** User will only interact with the frontend user interface while the server will take care of the rest.
- **Physical requirements:** Simple web application.
- **Supportability requirements:** Web application will be able to run on any browser.
