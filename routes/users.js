var express = require("express");
var router = express.Router();
let userSchema = require("../Schema/schema");
let { encrypted,dencrypted} = require("../Schema/crypt");
/* GET users listing. */
router.get("/display", async function (req, res) {
  try {
    const result = await userSchema.find();
    res.json({
      message: "Displaying all records",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});
router.post("/register", async function (req, res) {
  try {
    const user = await userSchema.findOne({ email: req.body.email });
    if (user) {
      res.send("User already exists");
    } else {
      let encode = await encrypted(req.body.password);
      req.body.password = encode;
      await userSchema.create(req.body);
      res.send({
        message: "Account created",
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/login", async function (req, res) {
  try {
    const user = await userSchema.findOne({ email: req.body.email });
    if (user) {
      let result = dencrypted(req.body.password, user.password)

      if (result) {
      res.send("Login Success");
      }
    } else {
      res.send("Wrong Password")
    }
     
    
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
