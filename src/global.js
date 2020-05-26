const crypto = require('crypto');

module.exports = {
    cryptoPwd(email, pwd){
        const cryptoPwd = crypto
                        .createHash('sha256')
                        .update(
                        email.substr(3,1)
                        .concat(email.substr(2,1))
                        .concat(email.substr(4,1))
                        .concat(email.substr(0,1))
                        .concat(email.substr(1,1))
                        .concat(pwd)
                        )
                        .digest('hex');    
        return cryptoPwd;
    }
};