export default function validateInfo(value){
    let error = {}

    if(!value.username.trim()){
        error.username = "Username required"
    }

    if(!value.email){
        error.email = "Email required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)){
        error.email = "Email address is invalid"
    }

    if(!value.password){
        error.password = "Password is required"
    } else if(value.password.length < 6){
        error.password = "Password need to be 6 characters or more"
    }

    if(!value.password2){
        error.password2 = "Password is required"
    } else if(value.password2 !== value.password){
        error.password2 = 'Password do not match'
    }

    return error

}