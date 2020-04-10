const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const helmet = require("helmet");
const path = require('path');

const app = express();

//provides some middleware security
app.use(helmet());

//cookie parser middleware
const cookieParser = require("cookie-parser");

app.use(cookieParser("mySecret"));
//maximum age of cookie(in ms)
//stores cookie
app.use(
  cookieSession({ maxAge: 24 * 60 * 60 * 1000, keys: [keys.session.cookieKey] })
);

//initializes authentication module
app.use(passport.initialize());
//alters the request object and changes the 'user' that is currently the session id(from client cookie) into the deserialized user object
app.use(passport.session());
const passportSetup = require("./config/passport");

app.use(logger("morgan"));

//enable cross-origin transfer
app.use(cors());
//initialize middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes for backend
const authRoutes = require("./routes/auth");
const logout = require("./routes/logout");
const getUser = require("./routes/getUser");
const getProducts = require("./routes/getProducts");
const newProduct = require("./routes/newProduct");
const remove = require("./routes/delete");
const edit = require("./routes/edit");

app.use(edit);
app.use(authRoutes);
app.use(logout);
app.use(getUser);
app.use(getProducts);
app.use(newProduct);
app.use(remove);

//gives access to static uploads folder
app.use("/uploads", express.static("uploads"));

//connect to monggose database
mongoose.connect(
  keys.mongoDB.dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`App is listening on port ${port}`));

//for heroku deployment
//Static file declaration 
app.use(express.static(path.join(__dirname, "frontend", "build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

module.exports = app;