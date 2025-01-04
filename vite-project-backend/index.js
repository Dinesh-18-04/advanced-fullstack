var express = require("express");
const path = require("path");
var mdb = require("mongoose");
var user = require("./models/users");
var product = require("./models/products");
var login = require("./models/login");
var feedback = require("./models/feedback");
var cors = require('cors')


const app = express();
const PORT = 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mdb
  .connect("mongodb://localhost:27017/training")
  .then(() => {
    console.log("MongoDb is Connected is Successfully Connected..");
  })
  .catch(() => {
    console.log("Check Your Connection String...");
  });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public\\index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public\\about.html"));
});

// app.post("/feedback", (req, res) => {
//   var { Name, Email, Feedback } = req.body;
//   console.log(req.body);
//   try {
//     var newUser = new user({
//       Name: Name,
//       Email: Email,
//       Feedback: Feedback,
//     });
//     newUser.save();
//     res.send("user Added Successfully..");
//   } catch (err) {
//     res.send(err);
//   }
// });

app.get("/fetchdata", async (req, res) => {
  var data = await user.find();
  try {
    res.status(200).json(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

app.post("/postData", async (req, res) => {
  var user = new login({
    Email: "ajaym.22cse@kongu.edu",
    Password: "123456",
  });
  await user.save();
  res.send("data send");
});
app.post("/login", async (req, res) => {
  var { Email, Password } = req.body;
  console.log(Email, Password);
  try {
    var existingUser = await login.findOne({ Email: Email });
    console.log(existingUser);
    if (existingUser) {
      if (existingUser.Password !== Password) {
        res.send("Invalid Credentials..");
      } else {
        res.json({ Message: "Login Successfull..", isLoggedIn: true });
      }
    } else {
      res.send("Create an Account");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/feedback", async (req, res) => {
  var { Name, Email, Feedback } = req.body;
  try {
    var feedbackk = new feedback({
      Name: Name,
      Email: Email,
      Feedback: Feedback,
    });
    feedbackk.save();
    res.status(200).send("success...")
  } catch (err) {
    console.log(err);
  }
});

app.post("/product", (req, res) => {
  var { productName, price, descrption } = req.body;
  try {
    var newProduct = new product({
      productName: productName,
      price: price,
      descrption: descrption,
    });
    newProduct.save();
    res.send("Product Added Successfully..");
  } catch (err) {
    res.send(err);
  }
});

app.get("/json", (req, res) => {
  res.send({
    Name: "Dinesh",
    Email: "dineshssd559@gamil.com",
  });
});

app.listen(PORT, () => {
  console.log(
    `The Backend server is started.. \n Url: http://localhost:${PORT}`
  );
});
