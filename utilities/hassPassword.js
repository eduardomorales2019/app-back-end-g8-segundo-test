var bcrypt = require("bcryptjs");

const SaltRounds = 10;

hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SaltRounds, function (err, salt) {
      if (err) reject(err);
      bcrypt.hash(password, salt, function (err, hash) {
        console.log("hash", hash);
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
};

module.exports = hashPassword;
