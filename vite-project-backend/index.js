var express = require("express");
const path = require("path")

const app = express();
const PORT = 3001;

// app.get("/", (req, res) => {
//   res.send("Welcome to the backend server....");
// });

app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res) => {
  res.sendFile('D:\\training\\vite-project-backend\\index.html')
});

app.get("/about",(req,res)=>{
  res.sendFile('D:\\training\\vite-project-backend\\public\\about.html')
})

app.listen(PORT, () => {
  console.log(
    `The Backend server is started.. \n Url: http://localhost:${PORT}`
  );
});
