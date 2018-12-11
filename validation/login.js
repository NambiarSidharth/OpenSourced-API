const validator = require('validator');
const isEmpty = require('./is-empty')
module.exports = function validateLoginInput(data){
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    
    if(validator.isEmpty(data.email)){
        errors.email = 'email field is empty'
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'email field is invalid'
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'Password field is empty'
    }
    
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
} 