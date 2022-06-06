var bcrypt = require("bcryptjs");

function encrypted(pwd) {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pwd, salt);
    return hash;
  } catch (error) {
    console.log(error);
  }
}
function dencrypted(pwd,dbPwd)
{
    try {

        return bcrypt.compareSync(pwd,dbPwd)
    } catch (error) {
        console.log("error");
    }
}

module.exports = { encrypted,dencrypted };
