const validator = require('validator');
const isEmpty = require('./is-empty')
module.exports = function validateProfileInput(data) {
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';


    if (!validator.isLength(data.handle, {
            min: 2,
            max: 40
        })) {
        errors.handle = 'handle needs to be between 2 and 40 characters'

    }
    if (validator.isEmpty(data.handle)) {
        errors.handle = 'Handle field is required'
    }
    if (validator.isEmpty(data.status)) {
        errors.status = 'Status field are required'

    }
    if (validator.isEmpty(data.skills)) {
        errors.skills = 'Skills field are required'

    }
    if (!isEmpty(data.website)) {
        if (!validator.isURL(data.website)) {
            errors.website = 'Not valid url'
        }
    }
    if (!isEmpty(data.youtube)) {
        if (!validator.isURL(data.youtube)) {
            errors.youtube = 'Not valid url'
        }
    }
    if (!isEmpty(data.twitter)) {
        if (!validator.isURL(data.twitter)) {
            errors.twitter = 'Not valid url'
        }
    }

    if (!isEmpty(data.facebook)) {
        if (!validator.isURL(data.facebook)) {
            errors.facebook = 'Not valid url'
        }
    }
    if (!isEmpty(data.linkedin)) {
        if (!validator.isURL(data.linkedin)) {
            errors.linkedin = 'Not valid url'
        }
    }
    if (!isEmpty(data.instagram)) {
        if (!validator.isURL(data.instagram)) {
            errors.instagram = 'Not valid url'
        }
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}