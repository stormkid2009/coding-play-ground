const bcrypt = require("bcrypt");

// Password encryption
const encryptPWD =(password)=>{

// Hash password and salt with md5 encryption
return bcrypt.hashSync(password, bcrypt.genSaltSync(10),null);
};

// Encrypt password

const encryptedPWD = encryptPWD("Vakindu Philliam")
console.log(encryptedPWD);

// Output:

//$2b$10$WVBZ5xk.BOdtsJsfYZ12.uG2haRnm/qXGeAtlle2jto/8uwHdIS6u

