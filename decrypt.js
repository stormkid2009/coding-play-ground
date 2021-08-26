const bcrypt = require('bcrypt');

// Compare passwords
const comparePWD = (password1, password2) => {

    // Compare two passwords
    return bcrypt.compareSync(password1, password2);
    };
    
    // Our encrypted Password
    
    var encryptedPWD = "$2b$10$WVBZ5xk.BOdtsJsfYZ12.uG2haRnm/qXGeAtlle2jto/8uwHdIS6u"
    
    // Password Matches
    
    const matcher_true = comparePWD("Vakindu Philliam", encryptedPWD)
    
    console.log(matcher_true); // True
    
    //Password DOES NOT match
    
    const matcher_false = comparePWD("Pyramid IO", encryptedPWD)
    
    console.log(matcher_false); // False