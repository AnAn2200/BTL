import { useState} from "react";
import validateInfo from "./validateInfo";


var useForm = (validate) => {
    var[values, setValues] = useState({
        username: ' ',
        email: ' ',
        password: ' ',
        password2: ' ',
    })

    var[error, setError] = useState({})


    var handChange = e => {
        var {name, value} = e.target
        setValues({
            ...values,
            [name]: value
    })
    }

    var handSubmit = e => {
        e.preventDefault();

        setError(validate(values))
    }
    return {handChange, values, handSubmit, error}
}

export default useForm